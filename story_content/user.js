function ExecuteScript(strId)
{
  switch (strId)
  {
      case "63Hy4K2con8":
        Script1();
        break;
      case "5j8AajWfEs6":
        Script2();
        break;
      case "5bdn0s3JYSn":
        Script3();
        break;
      case "5hvr8TiI6KN":
        Script4();
        break;
      case "6Pr8yS8rtMU":
        Script5();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script4()
{
  $("#tab-customlink").show();
}

function Script5()
{
  window.print();
}

