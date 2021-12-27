export class Theme
{
    primary;
    secondary;
    primarycontrast;
    secondarycontrast;

    public constructor(primary, secondary,primarycontrast,secondarycontrast){
        this.primary = primary;
        this.secondary = secondary;
        this.primarycontrast = primarycontrast;
        this.secondarycontrast = secondarycontrast;
    }

    //Factor method
    public static generateTheme(primary, secondary,primarycontrast,secondarycontrast){
        return new Theme(primary, secondary,primarycontrast,secondarycontrast);
    }


}
