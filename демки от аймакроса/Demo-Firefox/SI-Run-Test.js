












var i, s;

iimDisplay ("Test script running");
iimSet ("NAME", "T. Test");
iimSet ("MENU", "Pizza");
iimSet ("DRINK", "water");
iimSet ("DESSERT", "Fruits");
iimSet ("IS_CUSTOMER", "Yes");
iimSet ("PASSWORD", "abcabc");
iimSet ("REMARKS", "Form filled");
iimSet ("WAIT", "3");

i = iimPlay("Demo-Firefox/SI-Test-Macro1",60);


if (i < 0) {
    s = iimGetLastError();
    alert (s);
};




iimDisplay ("Verify form output");
i = iimPlay("Demo-Firefox/SI-Test-Macro2",60);

if (i < 0) {
    s = iimGetLastError();
    alert (s);
};

s = iimGetLastExtract();

if (s.indexOf ("Pizza") != -1)
    iimDisplay ("Test OK");
else
    iimDisplay ("Problem detected :"+s);
