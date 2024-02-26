using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WEBAPI.Controllers
{
    public class ValuesController : ApiController
    {
        static List<string> strings = new List<string>() {
          "value0", "value1","value2", "value3"
        };
        // GET: api/Values
        public IEnumerable<string> Get()
        {
            return strings;
        }

        // GET: api/Values/5
        public string Get(int id)
        {
            return strings[id];
        }

        // POST: api/Values
        public void Post([FromBody]string value)
        {
            strings.Add(value);
        }

        // PUT: api/Values/5
        public void Put(int id, [FromBody]string value)
        {
            strings[id] = value;
        }

        // DELETE: api/Values/5
        public void Delete(int id)
        {
            strings.RemoveAt(id);
        }
    }
}
