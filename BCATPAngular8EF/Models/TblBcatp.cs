namespace BCATPAngular8EF.Models
{
    public class TblBcatp : TblAllFormat { }
    public class TblNavy : TblAllFormat { }
    public class TblDewline : TblAllFormat { }
    public class TblMidCanada : TblAllFormat { }
    public class TblPinetree : TblAllFormat { }
    public class TblAirforce : TblAllFormat { }
    public class TblArmy : TblAllFormat { }
    public class TblDefunct : TblAllFormat { }
    public class TblTanks : TblAllFormat { }
    public class TblPlanes : TblAllFormat { }
    public class TblShips : TblAllFormat { }
    public class TblAllFormat
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Longitude { get; set; }
        public double Latitude { get; set; }
        public string Comment { get; set; }
        public string Wiki { get; set; }
    }
    //public class TblAllFormat2
    //{
    //    public int Id { get; set; }
    //    public string Name { get; set; }
    //    public string wiki { get; set; }
    //    public string wiki2 { get; set; }
    //    public string wiki3 { get; set; }
    //    public string comment { get; set; }
    //    public string image1 { get; set; }
    //    public string image2 { get; set; }
    //    public string image3 { get; set; }
    //    public int longitude { get; set; }
    //    public int latitude { get; set; }
    //}

}