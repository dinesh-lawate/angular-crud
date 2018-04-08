using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace EmpWebApi.Controllers
{
    [RoutePrefix("api/home")]
    public class HomeController : ApiController
    {
        //public ActionResult Index()
        //{
        //    ViewBag.Title = "Home Page";

        //    return View();
        //}

        [Route("UploadFile/{vlaue}")]
        [HttpPost]
        public HttpResponseMessage UploadFile(String vlaue)
        {
            HttpResponseMessage result = null;

            var httpRequest = HttpContext.Current.Request;

            if (httpRequest.Files.Count > 0)

            {

                var docfiles = new List<string>();

                foreach (string file in httpRequest.Files)

                {

                    var postedFile = httpRequest.Files[file];

                    var filePath = HttpContext.Current.Server.MapPath("~/" + postedFile.FileName);

                    postedFile.SaveAs(filePath);



                    docfiles.Add(filePath);

                }

                result = Request.CreateResponse(HttpStatusCode.Created, docfiles);

            }

            else

            {

                result = Request.CreateResponse(HttpStatusCode.BadRequest);

            }

            return result;

        }
    }
}
