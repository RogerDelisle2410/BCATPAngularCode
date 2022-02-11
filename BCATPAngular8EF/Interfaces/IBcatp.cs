using BCATPAngular8EF.Models;
using System.Collections.Generic;

namespace BCATPAngular8EF.Interfaces
{
    public interface IBcatp
    {
        IEnumerable<TblBcatp> GetAllBcatps();
        int AddBcatp(TblBcatp bcatp);
        int UpdateBcatp(TblBcatp bcatp);
        TblBcatp GetBcatpData(int id);
        int DeleteBcatp(int id);
    }

    public interface INavy
    {
        IEnumerable<TblNavy> GetAllNavys();
        int AddNavy(TblNavy navy);
        int UpdateNavy(TblNavy navy);
        TblNavy GetNavyData(int id);
        int DeleteNavy(int id);
    }

    public interface IDewline
    {
        IEnumerable<TblDewline> GetAllDewlines();
        int AddDewline(TblDewline dewline);
        int UpdateDewline(TblDewline ndewlineavy);
        TblDewline GetDewlineData(int id);
        int DeleteDewline(int id);
    }

    public interface IPinetree
    {
        IEnumerable<TblPinetree> GetAllPinetrees();
        int AddPinetree(TblPinetree pinetree);
        int UpdatePinetree(TblPinetree pinetree);
        TblPinetree GetPinetreeData(int id);
        int DeletePinetree(int id);
    }

    public interface IMidCanada
    {
        IEnumerable<TblMidCanada> GetAllMidCanadas();
        int AddMidCanada(TblMidCanada midcanada);
        int UpdateMidCanada(TblMidCanada midcanada);
        TblMidCanada GetMidCanadaData(int id);
        int DeleteMidCanada(int id);
    }

    public interface IAirforce
    {
        IEnumerable<TblAirforce> GetAllAirforces();
        int AddAirforce(TblAirforce airforce);
        int UpdateAirforce(TblAirforce airforce);
        TblAirforce GetAirforceData(int id);
        int DeleteAirforce(int id);
    }

    public interface IArmy
    {
        IEnumerable<TblArmy> GetAllArmys();
        int AddArmy(TblArmy army);
        int UpdateArmy(TblArmy army);
        TblArmy GetArmyData(int id);
        int DeleteArmy(int id);
    }

    public interface IDefunct
    {
        IEnumerable<TblDefunct> GetAllDefuncts();
        int AddDefunct(TblDefunct defunct);
        int UpdateDefunct(TblDefunct defunct);
        TblDefunct GetDefunctData(int id);
        int DeleteDefunct(int id);
    }
    public interface ITanks
    {
        IEnumerable<TblTanks> GetAllTanks();
        int AddTanks(TblTanks tanks);
        int UpdateTanks(TblTanks tanks);
        TblTanks GetTanksData(int id);
        int DeleteTanks(int id);
    }

    public interface IPlanes
    {
        IEnumerable<TblPlanes> GetAllPlanes();
        int AddPlanes(TblPlanes planes);
        int UpdatePlanes(TblPlanes planes);
        TblPlanes GetPlanesData(int id);
        int DeletePlanes(int id);
    }

    public interface IShips
    {
        IEnumerable<TblShips> GetAllShips();
        int AddShips(TblShips ships);
        int UpdateShips(TblShips ships);
        TblShips GetShipsData(int id);
        int DeleteShips(int id);
    }
}

