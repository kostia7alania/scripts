var ret
var s

ret = iimDisplay ("Get Exchange Rate Demo Macro")
ret = iimPlay("Demo-Firefox/Wsh-Extract-Rate")


if (ret == 1) {
     s = "One US$ costs " + iimGetLastExtract(1) + " EURO or " + iimGetLastExtract(2) + " British Pounds (GBP)"

}else
{
	s = "The following error occurred: "+iimGetLastError();
};
alert (s);

