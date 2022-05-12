import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { AlertuiService } from 'src/app/alertui.service';
import { AppdataService } from 'src/app/appdata.service';
import { APIService } from 'src/app/API.service';
import { Constants } from 'src/app/constants';
import { LocationdetailsPage } from '../locationdetails/locationdetails.page';
import { SensorsPage } from '../sensors/sensors.page';
import { Location } from '../domain/thmonitorschema';

import { Chart, registerables } from 'chart.js';
import { ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { formatDate } from '@angular/common';
Chart.register(...registerables);


@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {

  locationobj: Location;
  dialogheight;
  statuscolor;
  statusmsg;
  statusimg;
  tempcolor;
  humiditycolor;

  chart: Chart;
  @ViewChild('variationChart') variationChart;

  selectedproperty;
  timeseriesfetcheddata : any[];
  timeseriesdata : any[];
  dataObtained: boolean;

  constructor(
    private _router: Router,
    public alertService: AlertuiService,
    public dataService: AppdataService,
    public modalController: ModalController,
    public toastController: ToastController,
    public apiService: APIService
  ) {
    if (!this.dataService.isloggedin) {
      this._router.navigate(['/']);
    }
  }

  ngOnInit() {
    //this.locationobj = <Location>this.dataService.crudobject;
    //console.log(JSON.stringify(this.locationobj));
    console.log('LOCATION INIT');
    this.locationobj = <Location>this.dataService.crudobject;
    //this.dialogheight = Math.round(window.innerHeight * 0.9);

    this.checkStatus();
  }

  ngAfterViewInit() {
    this.selectedproperty = 'Temperature';
    this.setData();
    this.startPollingLocations();
  }

  ionViewWillEnter(){
    //console.log('LOCATION VIEW WILL ENTER ');
    this.locationobj = <Location>this.dataService.crudobject;
    this.checkStatus();
  }

  async setData(){
    this.dataObtained = false;
    var curtime = new Date().getTime();
    var starttime = curtime - (30*24*3600*1000);

    var startloctimestamp = this.locationobj.id + "|" + starttime;
    var endloctimestamp = this.locationobj.id + "|" + curtime;

    this.timeseriesfetcheddata = await this.dataService.getSensorReadings(startloctimestamp,endloctimestamp);
    this.timeseriesdata = this.timeseriesfetcheddata;
    this.dataObtained = true;
    console.log('No of readings ' + this.timeseriesdata.length);

    if(this.timeseriesdata.length > 0 )
    {
      this.initChart();
      this.setChartForPeriod("24hrs");
    }
  }


  getLabelsArray(){
    var retarray = [];
    for(var data of this.timeseriesdata){
       var loctimestamp = data.locationtimestamp.substring(data.locationtimestamp.indexOf("|") + 1, data.locationtimestamp.length);
       retarray.push(formatDate(loctimestamp, "MMM-dd HH:mm","en"));
    }
    return retarray;
  }

  getDataArray(){
    var retarray = [];
    for(var data of this.timeseriesdata){
       retarray.push(this.getDatapoint(data));
    }
    return retarray;
  }

  getDatapoint(data : any){
    switch(this.selectedproperty){
      case "Temperature" : return data.decodedjson.temperature;
      case "Humidity" : return data.decodedjson.humidity;
      case "Co2" : return data.decodedjson.co2;
      case "Pressure" : return data.decodedjson.pressure;
      case "PM 2.5" : return data.decodedjson.pm2_5;
      case "PM 10" : return data.decodedjson.pm10;
      case "HCHO" : return data.decodedjson.hcho;
      case "TVOC" : return data.decodedjson.tvoc;
      case "Light Level" : return data.decodedjson.light_level;

      default: return  data.decodedjson.temperature;
    }
  }

  setChartForAttribute(attrib){
    this.selectedproperty = attrib;
    this.updateChart();
  }

  setChartForPeriod(period){
    var curtime = new Date().getTime();
    var starttime = curtime;
    if(period == "30days")
      this.timeseriesdata = this.timeseriesfetcheddata;
    else{
      if(period == "24hrs")
        starttime = curtime - (24*3600*1000);

      if(period == "7days")
        starttime = curtime - (7*24*3600*1000);

      var retarray = [];
      for(var data of this.timeseriesfetcheddata){
          var loctimestamp = data.locationtimestamp.substring(data.locationtimestamp.indexOf("|") + 1, data.locationtimestamp.length);
          if(loctimestamp >= starttime)
            retarray.push(data);
      }
      this.timeseriesdata = retarray;
    }

    this.updateChart();
  }



  initChart(){
    this.chart = new Chart(this.variationChart.nativeElement, {
      type: 'line',
      data: {
        labels: this.getLabelsArray(), // array should have same number of elements as number of dataset
        datasets: [{
          label: this.selectedproperty,
          data: this.getDataArray(),
          backgroundColor: 'rgb(242,157,14)',
          borderColor: 'rgb(242,157,14)',
          borderWidth: 2,
          pointRadius: 0
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }

  updateChart() {
    this.chart.data.labels = this.getLabelsArray();
    this.chart.data.datasets[0].data = this.getDataArray();
    this.chart.data.datasets[0].label = this.selectedproperty;

    this.chart.update();

  }

  closeDialog(){
    this._router.navigate(['/dashboard']);
  }


  async openForm(typ) {

    let root = document.documentElement;
    root.style.setProperty('--crud-form-height', this.dialogheight + 'px');

    if (typ == 'location') {
      const modal = await this.modalController.create({
        component: LocationdetailsPage,
        cssClass: 'crud-form-wrapper',
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    else{
      const modal = await this.modalController.create({
        component: SensorsPage,
        cssClass: 'crud-form-wrapper',
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }

  }


  async editLocation() {
    this.dataService.crudpurpose = Constants.EDIT;
    this.dataService.crudobject = this.dataService.getClone(this.locationobj);
    this._router.navigate(['/locationdetails']);
  }

  viewSensor() {
    this._router.navigate(['/sensors']);
  }

  refreshTimer;
  async startPollingLocations(){
    try{
        console.log('|LOCATION POLLING POLLING|');
        var key = {userid:this.dataService.cognitoid, id:this.locationobj.id};
        var curlocation = <Location> await this.dataService.dbService.getItem("thmonitor_location", key);
        if (curlocation) {
          this.locationobj = curlocation;
          this.dataService.updateLocationList(curlocation,Constants.EDIT);
          this.checkStatus();
        }

    }catch(err){}

    //if(this.dataService.isuserloggedin)
    this.refreshTimer = setTimeout(()=>{this.startPollingLocations()},10000);
  }

  checkStatus(){
    console.log("In check status..");
    this.statuscolor="success";
    this.statusmsg="All Good";
    this.tempcolor="primary";
    this.humiditycolor="accent";
    this.statusimg="../../assets/icon/smile.png";


    if(!this.checkTemp())
      this.setAlert();

    if(!this.checkHumidity())
    {
      this.setAlert();
      return;
    }

    if(!this.locationobj.currentco2level || (this.locationobj.currentco2level < this.locationobj.co2levelmin) || (this.locationobj.currentco2level > this.locationobj.co2levelmax))
    {
      this.setAlert();
      return;
    }

    if(!this.locationobj.currentbarometricpressure || (this.locationobj.currentbarometricpressure < this.locationobj.barometricpressuremin) || (this.locationobj.currentbarometricpressure > this.locationobj.barometricpressuremax))
    {
      this.setAlert();
      return;
    }

    if(!this.locationobj.currentpm2pt5level || (this.locationobj.currentpm2pt5level < this.locationobj.pm2pt5levelmin) ||  (this.locationobj.currentpm2pt5level > this.locationobj.pm2pt5levelmax))
    {
      this.setAlert();
      return;
    }

    if(!this.locationobj.currentpm10level || (this.locationobj.currentpm10level < this.locationobj.pm10levelmin) ||  (this.locationobj.currentpm10level > this.locationobj.pm10levelmax))
    {
      this.setAlert();
      return;
    }

    if(!this.locationobj.currenttvoclevel || (this.locationobj.currenttvoclevel < this.locationobj.tvoclevelmin) ||  (this.locationobj.currenttvoclevel > this.locationobj.tvoclevelmax))
    {
      this.setAlert();
      return;
    }

    if(!this.locationobj.currenthcholevel || (this.locationobj.currenthcholevel < this.locationobj.hcholevelmin) ||  (this.locationobj.currenthcholevel > this.locationobj.hcholevelmax))
    {
      this.setAlert();
      return;
    }

    if(!this.locationobj.currentozonelevel || (this.locationobj.currentozonelevel < this.locationobj.ozonelevelmin) ||  (this.locationobj.currentozonelevel > this.locationobj.illuminationmax))
    {
      this.setAlert();
      return;
    }

    if(!this.locationobj.currentillumination || (this.locationobj.currentillumination < this.locationobj.illuminationmin) ||  (this.locationobj.currentillumination > this.locationobj.illuminationmax))
    {
      this.setAlert();
      return;
    }

    if(!this.locationobj.currentsound || (this.locationobj.currentsound < this.locationobj.soundmin) ||  (this.locationobj.currentsound > this.locationobj.soundmax))
    {
      this.setAlert();
      return;
    }

  }

  checkTemp(){
    if(!this.locationobj.currenttemp || (this.locationobj.currenttemp < this.locationobj.temperaturemin) ||  (this.locationobj.currenttemp >  this.locationobj.temperaturemax))
    {
      this.tempcolor="danger";
      return false;
    }
    else
      return true;
  }

  checkHumidity(){
    if(!this.locationobj.currenthumidity || (this.locationobj.currenthumidity < this.locationobj.humiditymin) ||  (this.locationobj.currenthumidity >  this.locationobj.humiditymax))
    {
      this.humiditycolor="danger";
      return false;
    }
    else
      return true;
  }

  setAlert(){
    this.statuscolor="warning";
    this.statusmsg="Alert!";
    this.statusimg="../../assets/icon/sad.png";
  }


}
