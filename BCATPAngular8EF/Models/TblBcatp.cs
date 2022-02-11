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

}