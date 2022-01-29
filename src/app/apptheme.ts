import { Theme } from "./theme";

export class Apptheme
{
    //THEME TYPE
    public static  HOLA_CLASSIC = "1";
    public static  SOOTHING_LILAC = "2";
    public static  PERSIAN_GREEN  = "3";

    public static holaclassic = Theme.generateTheme("#156FAE","#F29D0E","#FFFFFF","#FFFFFF");
    public static soothinglilac = Theme.generateTheme("#D479B2","#333333","#FFFFFF","#FFFFFF");
    public static persiangreen = Theme.generateTheme("#36A692","#333333","#FFFFFF","#FFFFFF");

    public static getThemeForId(themeid){
        switch(themeid){
            case Apptheme.HOLA_CLASSIC: return Apptheme.holaclassic;
            case Apptheme.SOOTHING_LILAC: return Apptheme.soothinglilac;
            case Apptheme.PERSIAN_GREEN: return Apptheme.persiangreen;
        }
    }

    public static getThemeList(){
        return [
            { name: 'Hola Classic', id: Apptheme.HOLA_CLASSIC, colors:[Apptheme.holaclassic.primary,Apptheme.holaclassic.secondary]},
            { name: 'Soothing Lilac', id: Apptheme.SOOTHING_LILAC,colors:[Apptheme.soothinglilac.primary,Apptheme.soothinglilac.secondary] },
            { name: 'Persian Green', id: Apptheme.PERSIAN_GREEN,colors:[Apptheme.persiangreen.primary,Apptheme.persiangreen.secondary] },
        ];

    }


    public static initializeTheme(){
        this.setTheme(this.getCurrentTheme());
    }
    public static getCurrentTheme(){
        var curtheme = localStorage.getItem('apptheme');
        if(curtheme && curtheme.length > 0){
            return curtheme;
        }else{
            return Apptheme.HOLA_CLASSIC;
        }
    }


    public static setTheme(themeid){
        let root = document.documentElement;
        var theme = Apptheme.getThemeForId(themeid);
        root.style.setProperty('--ion-color-primary', theme.primary);
        root.style.setProperty('--ion-color-secondary', theme.secondary);
        root.style.setProperty('--ion-color-primary-contrast', theme.primarycontrast);
        root.style.setProperty('--ion-color-secondary-contrast', theme.primarycontrast);
        localStorage.setItem("apptheme" , "" + themeid);
    }
}
