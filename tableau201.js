var viz;
        
        function initViz() {
            var containerDiv = document.getElementById("vizContainer"),
                url = "http://public.tableau.com/views/RegionalSampleWorkbook/College",
                options = {
                    "Academic Year": "",
                    hideTabs: true
                };
            
            viz = new tableau.Viz(containerDiv, url, options);
        }
        
        function yearFilter(year) {
            var sheet = viz.getWorkbook().getActiveSheet();
            if (year === "") {
                sheet.clearFilterAsync("Academic Year");
            } else {
                sheet.applyFilterAsync("Academic Year", year, tableau.FilterUpdateType.REPLACE);
            }
        }
function vizFilter(filterName,filterValue,filterType)

{ var sheet=viz.getWorkbook().getActiveSheet();

 if(sheet.getSheetType() === 'worksheet')

 {   
     if (filterType === "clear"){
         sheet.clearFilterAsync(filterName);
     }
     sheet.applyFilterAsync(filterName,filterValue,filterType);
 }
 else
 {

   worksheetArray = sheet.getWorksheets();
   for(var i =0; i < worksheetArray.length; i++)
   {
     worksheetArray[i].applyFilterAsync(filterName,filterValue,filterType);

   }
 }
}
