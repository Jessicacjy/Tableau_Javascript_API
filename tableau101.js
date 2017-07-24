
window.onload= function()

{

    var vizDiv = document.getElementById("tableauViz");

    var vizUrl = "http://public.tableau.com/views/padawan/SuperStoreJSAPI101";

    var vizOptions = {
        hideTabs:true, 
        onFirstInteractive: function(){
            console.log("Run this code when the viz has finished loading.")
        }};

    viz = new tableauSoftware.Viz(vizDiv, vizUrl, vizOptions);    

};

function switchView(sheetName)

{

 workBook = viz.getWorkbook();

 workBook.activateSheetAsync(sheetName);

};   

function vizFilter(filterName,filterValue,filterType)

{

 sheet=viz.getWorkbook().getActiveSheet();

 if(sheet.getSheetType() === 'worksheet')

 {

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