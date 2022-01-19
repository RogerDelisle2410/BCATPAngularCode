namespace BCATPAngular8EF.Models
{//Roger
    public class TblBcatp : TableFormat { }
    public class TblNavy : TableFormat { }
    public class TblDewline : TableFormat { }
    public class TblMidCanada : TableFormat { }
    public class TblPinetree : TableFormat { }
    public class TblAirforce : TableFormat { }
    public class TblArmy : TableFormat { }
    public class TblDefunct : TableFormat { }
    public class TableFormat
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Longitude { get; set; }
        public double Latitude { get; set; }
        public string Comment { get; set; }
        public string Wiki { get; set; }
    }
}
