using BCATPAngular8EF.Interfaces;
using BCATPAngular8EF.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace BCATPAngular8EF.DataAccess
{
    public class BcatpDataAccessLayer : IBcatp
    {
        private BCATPDBContext dbBcatp;

        public BcatpDataAccessLayer(BCATPDBContext _db)
        {
            dbBcatp = _db;
        }

        public IEnumerable<TblBcatp> GetAllBcatps()
        {
            try
            {
                return dbBcatp.TblBcatp.ToList().OrderBy(x => x.Name);
            }
            catch
            {
                throw;
            }
        }

        //To Add new bcatp record 
        public int AddBcatp(TblBcatp bcatp)
        {
            try
            {
                dbBcatp.TblBcatp.Add(bcatp);
                dbBcatp.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar bcatp
        public int UpdateBcatp(TblBcatp bcatp)
        {
            try
            {
                dbBcatp.Entry(bcatp).State = EntityState.Modified;
                dbBcatp.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular bcatp
        public TblBcatp GetBcatpData(int id)
        {
            try
            {
                TblBcatp bcatp = dbBcatp.TblBcatp.Find(id);
                return bcatp;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record on a particular bcatp
        public int DeleteBcatp(int id)
        {
            try
            {
                TblBcatp emp = dbBcatp.TblBcatp.Find(id);
                dbBcatp.TblBcatp.Remove(emp);
                dbBcatp.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }

    public class NavyDataAccessLayer : INavy
    {
        private readonly BCATPDBContext dbNavy;

        public NavyDataAccessLayer(BCATPDBContext _db)
        {
            dbNavy = _db;
        }

        public IEnumerable<TblNavy> GetAllNavys()
        {
            try
            {
                return dbNavy.TblNavy.ToList().OrderBy(x => x.Name);
            }
            catch
            {
                throw;
            }
        }

        //To Add new navy record 
        public int AddNavy(TblNavy navy)
        {
            try
            {
                dbNavy.TblNavy.Add(navy);
                dbNavy.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar navy
        public int UpdateNavy(TblNavy navy)
        {
            try
            {
                dbNavy.Entry(navy).State = EntityState.Modified;
                dbNavy.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular navy
        public TblNavy GetNavyData(int id)
        {
            try
            {
                TblNavy navy = dbNavy.TblNavy.Find(id);
                return navy;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record on a particular navy
        public int DeleteNavy(int id)
        {
            try
            {
                TblNavy emp = dbNavy.TblNavy.Find(id);
                dbNavy.TblNavy.Remove(emp);
                dbNavy.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }

    public class DewlineDataAccessLayer : IDewline
    {
        private readonly BCATPDBContext dbDewline;

        public DewlineDataAccessLayer(BCATPDBContext _db)
        {
            dbDewline = _db;
        }

        public IEnumerable<TblDewline> GetAllDewlines()
        {
            try
            {
                return dbDewline.TblDewline.ToList().OrderBy(x => x.Name);
            }
            catch
            {
                throw;
            }
        }

        //To Add new dewline record 
        public int AddDewline(TblDewline dewline)
        {
            try
            {
                dbDewline.TblDewline.Add(dewline);
                dbDewline.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar dewline
        public int UpdateDewline(TblDewline dewline)
        {
            try
            {
                dbDewline.Entry(dewline).State = EntityState.Modified;
                dbDewline.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular dewline
        public TblDewline GetDewlineData(int id)
        {
            try
            {
                TblDewline dewline = dbDewline.TblDewline.Find(id);
                return dewline;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record on a particular dewline
        public int DeleteDewline(int id)
    {
        try
        {
            TblDewline emp = dbDewline.TblDewline.Find(id);
            dbDewline.TblDewline.Remove(emp);
            dbDewline.SaveChanges();
            return 1;
        }
        catch
        {
            throw;
        }
    }
}

    public class PinetreeDataAccessLayer : IPinetree
    {
        private readonly BCATPDBContext dbPinetree;

        public PinetreeDataAccessLayer(BCATPDBContext _db)
        {
            dbPinetree = _db;
        }

        public IEnumerable<TblPinetree> GetAllPinetrees()
        {
            try
            {
                return dbPinetree.TblPinetree.ToList().OrderBy(x => x.Name);
            }
            catch
            {
                throw;
            }
        }

        //To Add new pinetree record 
        public int AddPinetree(TblPinetree pinetree)
        {
            try
            {
                dbPinetree.TblPinetree.Add(pinetree);
                dbPinetree.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar pinetree
        public int UpdatePinetree(TblPinetree pinetree)
        {
            try
            {
                dbPinetree.Entry(pinetree).State = EntityState.Modified;
                dbPinetree.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular pinetree
        public TblPinetree GetPinetreeData(int id)
        {
            try
            {
                TblPinetree pinetree = dbPinetree.TblPinetree.Find(id);
                return pinetree;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record on a particular pinetree
        public int DeletePinetree(int id)
        {
            try
            {
                TblPinetree emp = dbPinetree.TblPinetree.Find(id);
                dbPinetree.TblPinetree.Remove(emp);
                dbPinetree.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }

    public class MidCanadaDataAccessLayer : IMidCanada
    {
        private readonly BCATPDBContext dbMidCanada;

        public MidCanadaDataAccessLayer(BCATPDBContext _db)
        {
            dbMidCanada = _db;
        }

        public IEnumerable<TblMidCanada> GetAllMidCanadas()
        {
            try
            {
                return dbMidCanada.TblMidCanada.ToList().OrderBy(x => x.Name);
            }
            catch
            {
                throw;
            }
        }

        //To Add new midcanada record 
        public int AddMidCanada(TblMidCanada midcanada)
        {
            try
            {
                dbMidCanada.TblMidCanada.Add(midcanada);
                dbMidCanada.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar midcanada
        public int UpdateMidCanada(TblMidCanada midcanada)
        {
            try
            {
                dbMidCanada.Entry(midcanada).State = EntityState.Modified;
                dbMidCanada.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular midcanada
        public TblMidCanada GetMidCanadaData(int id)
        {
            try
            {
                TblMidCanada midcanada = dbMidCanada.TblMidCanada.Find(id);
                return midcanada;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record on a particular midcanada
        public int DeleteMidCanada(int id)
        {
            try
            {
                TblMidCanada emp = dbMidCanada.TblMidCanada.Find(id);
                dbMidCanada.TblMidCanada.Remove(emp);
                dbMidCanada.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }

    public class AirforceDataAccessLayer : IAirforce
    {
        private readonly BCATPDBContext dbAirforce;

        public AirforceDataAccessLayer(BCATPDBContext _db)
        {
            dbAirforce = _db;
        }

        public IEnumerable<TblAirforce> GetAllAirforces()
        {
            try
            {
                return dbAirforce.TblAirforce.ToList().OrderBy(x => x.Name);
            }
            catch
            {
                throw;
            }
        }

        //To Add new airforce record 
        public int AddAirforce(TblAirforce airforce)
        {
            try
            {
                dbAirforce.TblAirforce.Add(airforce);
                dbAirforce.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar airforce
        public int UpdateAirforce(TblAirforce airforce)
        {
            try
            {
                dbAirforce.Entry(airforce).State = EntityState.Modified;
                dbAirforce.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular airforce
        public TblAirforce GetAirforceData(int id)
        {
            try
            {
                TblAirforce airforce = dbAirforce.TblAirforce.Find(id);
                return airforce;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record on a particular airforce
        public int DeleteAirforce(int id)
        {
            try
            {
                TblAirforce emp = dbAirforce.TblAirforce.Find(id);
                dbAirforce.TblAirforce.Remove(emp);
                dbAirforce.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }



    public class ArmyDataAccessLayer : IArmy
    {
        private readonly BCATPDBContext dbArmy;

        public ArmyDataAccessLayer(BCATPDBContext _db)
        {
            dbArmy = _db;
        }

        public IEnumerable<TblArmy> GetAllArmys()
        {
            try
            {
                return dbArmy.TblArmy.ToList().OrderBy(x => x.Name);
            }
            catch
            {
                throw;
            }
        }

        //To Add new army record 
        public int AddArmy(TblArmy army)
        {
            try
            {
                dbArmy.TblArmy.Add(army);
                dbArmy.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar army
        public int UpdateArmy(TblArmy army)
        {
            try
            {
                dbArmy.Entry(army).State = EntityState.Modified;
                dbArmy.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular army
        public TblArmy GetArmyData(int id)
        {
            try
            {
                TblArmy army = dbArmy.TblArmy.Find(id);
                return army;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record on a particular army
        public int DeleteArmy(int id)
        {
            try
            {
                TblArmy emp = dbArmy.TblArmy.Find(id);
                dbArmy.TblArmy.Remove(emp);
                dbArmy.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }




    public class DefunctDataAccessLayer : IDefunct
    {
        private readonly BCATPDBContext dbDefunct;

        public DefunctDataAccessLayer(BCATPDBContext _db)
        {
            dbDefunct = _db;
        }

        public IEnumerable<TblDefunct> GetAllDefuncts()
        {
            try
            {
                return dbDefunct.TblDefunct.ToList().OrderBy(x => x.Name);
            }
            catch
            {
                throw;
            }
        }

        //To Add new defunct record 
        public int AddDefunct(TblDefunct defunct)
        {
            try
            {
                dbDefunct.TblDefunct.Add(defunct);
                dbDefunct.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar defunct
        public int UpdateDefunct(TblDefunct defunct)
        {
            try
            {
                dbDefunct.Entry(defunct).State = EntityState.Modified;
                dbDefunct.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular defunct
        public TblDefunct GetDefunctData(int id)
        {
            try
            {
                TblDefunct defunct = dbDefunct.TblDefunct.Find(id);
                return defunct;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record on a particular defunct
        public int DeleteDefunct(int id)
        {
            try
            {
                TblDefunct emp = dbDefunct.TblDefunct.Find(id);
                dbDefunct.TblDefunct.Remove(emp);
                dbDefunct.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
    public class TanksDataAccessLayer : ITanks
    {
        private readonly BCATPDBContext dbTanks;

        public TanksDataAccessLayer(BCATPDBContext _db)
        {
            dbTanks = _db;
        }

        public IEnumerable<TblTanks> GetAllTanks()
        {
            try
            {
                return dbTanks.TblTanks.ToList().OrderBy(x => x.Name);
            }
            catch
            {
                throw;
            }
        }

        //To Add new tank record 
        public int AddTanks(TblTanks tanks)
        {
            try
            {
                dbTanks.TblTanks.Add(tanks);
                dbTanks.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar tank
        public int UpdateTanks(TblTanks tanks)
        {
            try
            {
                dbTanks.Entry(tanks).State = EntityState.Modified;
                dbTanks.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular tank
        public TblTanks GetTanksData(int id)
        {
            try
            {
                TblTanks tanks = dbTanks.TblTanks.Find(id);
                return tanks;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record on a particular tank
        public int DeleteTanks(int id)
        {
            try
            {
                TblTanks emp = dbTanks.TblTanks.Find(id);
                dbTanks.TblTanks.Remove(emp);
                dbTanks.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }

    public class PlanesDataAccessLayer : IPlanes
    {
        private readonly BCATPDBContext dbPlanes;

        public PlanesDataAccessLayer(BCATPDBContext _db)
        {
            dbPlanes = _db;
        }

        public IEnumerable<TblPlanes> GetAllPlanes()
        {
            try
            {
                return dbPlanes.TblPlanes.ToList().OrderBy(x => x.Name);
            }
            catch
            {
                throw;
            }
        }

        //To Add new plane record 
        public int AddPlanes(TblPlanes planes)
        {
            try
            {
                dbPlanes.TblPlanes.Add(planes);
                dbPlanes.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar plane
        public int UpdatePlanes(TblPlanes planes)
        {
            try
            {
                dbPlanes.Entry(planes).State = EntityState.Modified;
                dbPlanes.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular plane
        public TblPlanes GetPlanesData(int id)
        {
            try
            {
                TblPlanes planes = dbPlanes.TblPlanes.Find(id);
                return planes;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record on a particular plane
        public int DeletePlanes(int id)
        {
            try
            {
                TblPlanes emp = dbPlanes.TblPlanes.Find(id);
                dbPlanes.TblPlanes.Remove(emp);
                dbPlanes.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
    public class ShipsDataAccessLayer : IShips
    {
        private readonly BCATPDBContext dbShips;

        public ShipsDataAccessLayer(BCATPDBContext _db)
        {
            dbShips = _db;
        }

        public IEnumerable<TblShips> GetAllShips()
        {
            try
            {
                return dbShips.TblShips.ToList().OrderBy(x => x.Name);
            }
            catch
            {
                throw;
            }
        }

        //To Add new ship record 
        public int AddShips(TblShips ships)
        {
            try
            {
                dbShips.TblShips.Add(ships);
                dbShips.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar ship
        public int UpdateShips(TblShips ships)
        {
            try
            {
                dbShips.Entry(ships).State = EntityState.Modified;
                dbShips.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular ship
        public TblShips GetShipsData(int id)
        {
            try
            {
                TblShips ships = dbShips.TblShips.Find(id);
                return ships;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record on a particular ship
        public int DeleteShips(int id)
        {
            try
            {
                TblShips emp = dbShips.TblShips.Find(id);
                dbShips.TblShips.Remove(emp);
                dbShips.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}
