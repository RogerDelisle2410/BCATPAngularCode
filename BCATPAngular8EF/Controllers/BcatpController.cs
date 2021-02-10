using System.Collections.Generic;
using BCATPAngular8EF.Interfaces;
using BCATPAngular8EF.Models;
using Microsoft.AspNetCore.Mvc;

namespace BCATPAngular8EF.Controllers
{
    [Route("api/[controller]")]
    public class BcatpController : Controller
    {
        private readonly IBcatp objbcatp;

        public BcatpController(IBcatp _objbcatp)
        {
            objbcatp = _objbcatp;
        }

        [HttpGet]
        [Route("Index")]
        public IEnumerable<TblBcatp> Index()
        {
            return objbcatp.GetAllBcatps();
        }

        [HttpPost]
        [Route("Create")]
        public int Create([FromBody] TblBcatp bcatp)
        {
            return objbcatp.AddBcatp(bcatp);
        }

       [HttpGet]   
        [Route("Details/{id}")]
        public TblBcatp Details(int id)
        {
            return objbcatp.GetBcatpData(id);
        }

       [HttpPut]
        [Route("Edit")]
        public int Edit([FromBody]TblBcatp bcatp)
        {
            return objbcatp.UpdateBcatp(bcatp);
        }

      [HttpDelete]
        [Route("Delete/{id}")]
        public int Delete(int id)
        {
            return objbcatp.DeleteBcatp(id);
        }         
    }

    [Route("api/[controller]")]
    public class NavyController : Controller
    {
        private readonly INavy objnavy;

        public NavyController(INavy _objnavy)
        {
            objnavy = _objnavy;
        }

        [HttpGet]
        [Route("Index")]
        public IEnumerable<TblNavy> Index()
        {
            return objnavy.GetAllNavys();
        }

        [HttpPost]
        [Route("Create")]
        public int Create([FromBody] TblNavy navy)
        {
            return objnavy.AddNavy(navy);
        }

        [HttpGet]
        [Route("Details/{id}")]
        public TblNavy Details(int id)
        {
            return objnavy.GetNavyData(id);
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit([FromBody] TblNavy navy)
        {
            return objnavy.UpdateNavy(navy);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public int Delete(int id)
        {
            return objnavy.DeleteNavy(id);
        }
    }

    [Route("api/[controller]")]
    public class DewlineController : Controller
    {
        private readonly IDewline objdewline;

        public DewlineController(IDewline _objdewline)
        {
            objdewline = _objdewline;
        }

        [HttpGet]
        [Route("Index")]
        public IEnumerable<TblDewline> Index()
        {
            return objdewline.GetAllDewlines();
        }

        [HttpPost]
        [Route("Create")]
        public int Create([FromBody] TblDewline dewline)
        {
            return objdewline.AddDewline(dewline);
        }

        [HttpGet]
        [Route("Details/{id}")]
        public TblDewline Details(int id)
        {
            return objdewline.GetDewlineData(id);
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit([FromBody] TblDewline dewline)
        {
            return objdewline.UpdateDewline(dewline);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public int Delete(int id)
        {
            return objdewline.DeleteDewline(id);
        }
    }

    [Route("api/[controller]")]
    public class PinetreeController : Controller
    {
        private readonly IPinetree objpinetree;

        public PinetreeController(IPinetree _objpinetree)
        {
            objpinetree = _objpinetree;
        }

        [HttpGet]
        [Route("Index")]
        public IEnumerable<TblPinetree> Index()
        {
            return objpinetree.GetAllPinetrees();
        }

        [HttpPost]
        [Route("Create")]
        public int Create([FromBody] TblPinetree pinetree)
        {
            return objpinetree.AddPinetree(pinetree);
        }

        [HttpGet]
        [Route("Details/{id}")]
        public TblPinetree Details(int id)
        {
            return objpinetree.GetPinetreeData(id);
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit([FromBody] TblPinetree pinetree)
        {
            return objpinetree.UpdatePinetree(pinetree);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public int Delete(int id)
        {
            return objpinetree.DeletePinetree(id);
        }
    }

    [Route("api/[controller]")]
    public class MidCanadaController : Controller
    {
        private readonly IMidCanada objmidcanada;

        public MidCanadaController(IMidCanada _objmidcanada)
        {
            objmidcanada = _objmidcanada;
        }

        [HttpGet]
        [Route("Index")]
        public IEnumerable<TblMidCanada> Index()
        {
            return objmidcanada.GetAllMidCanadas();
        }

        [HttpPost]
        [Route("Create")]
        public int Create([FromBody] TblMidCanada midcanada)
        {
            return objmidcanada.AddMidCanada(midcanada);
        }

        [HttpGet]
        [Route("Details/{id}")]
        public TblMidCanada Details(int id)
        {
            return objmidcanada.GetMidCanadaData(id);
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit([FromBody] TblMidCanada midcanada)
        {
            return objmidcanada.UpdateMidCanada(midcanada);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public int Delete(int id)
        {
            return objmidcanada.DeleteMidCanada(id);
        }
    }



    [Route("api/[controller]")]
    public class AirforceController : Controller
    {
        private readonly IAirforce objairforce;

        public AirforceController(IAirforce _objairforce)
        {
            objairforce = _objairforce;
        }

        [HttpGet]
        [Route("Index")]
        public IEnumerable<TblAirforce> Index()
        {
            return objairforce.GetAllAirforces();
        }

        [HttpPost]
        [Route("Create")]
        public int Create([FromBody] TblAirforce airforce)
        {
            return objairforce.AddAirforce(airforce);
        }

        [HttpGet]
        [Route("Details/{id}")]
        public TblAirforce Details(int id)
        {
            return objairforce.GetAirforceData(id);
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit([FromBody] TblAirforce airforce)
        {
            return objairforce.UpdateAirforce(airforce);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public int Delete(int id)
        {
            return objairforce.DeleteAirforce(id);
        }
    }

    [Route("api/[controller]")]
    public class ArmyController : Controller
    {
        private readonly IArmy objarmy;

        public ArmyController(IArmy _objarmy)
        {
            objarmy = _objarmy;
        }

        [HttpGet]
        [Route("Index")]
        public IEnumerable<TblArmy> Index()
        {
            return objarmy.GetAllArmys();
        }

        [HttpPost]
        [Route("Create")]
        public int Create([FromBody] TblArmy army)
        {
            return objarmy.AddArmy(army);
        }

        [HttpGet]
        [Route("Details/{id}")]
        public TblArmy Details(int id)
        {
            return objarmy.GetArmyData(id);
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit([FromBody] TblArmy army)
        {
            return objarmy.UpdateArmy(army);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public int Delete(int id)
        {
            return objarmy.DeleteArmy(id);
        }
    }

    [Route("api/[controller]")]
    public class DefunctController : Controller
    {
        private readonly IDefunct objdefunct;

        public DefunctController(IDefunct _objdefunct)
        {
            objdefunct = _objdefunct;
        }

        [HttpGet]
        [Route("Index")]
        public IEnumerable<TblDefunct> Index()
        {
            return objdefunct.GetAllDefuncts();
        }

        [HttpPost]
        [Route("Create")]
        public int Create([FromBody] TblDefunct defunct)
        {
            return objdefunct.AddDefunct(defunct);
        }

        [HttpGet]
        [Route("Details/{id}")]
        public TblDefunct Details(int id)
        {
            return objdefunct.GetDefunctData(id);
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit([FromBody] TblDefunct defunct)
        {
            return objdefunct.UpdateDefunct(defunct);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public int Delete(int id)
        {
            return objdefunct.DeleteDefunct(id);
        }
    }
}
