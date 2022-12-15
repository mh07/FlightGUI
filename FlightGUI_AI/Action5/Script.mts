SystemUtil.Run "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"
AIUtil.SetContext WpfWindow("wpftypename:=window", "regexpwndtitle:=Micro Focus MyFlight Sample Application", "devname:=Micro Focus MyFlight Sample Application")

AIUtil("text_box", "Username").Type "john"
AIUtil("text_box", "Password").Type "hp"
AIUtil("button", "OK").Click


AIUtil("button", "FIND FLIGHTS").Click
AIUtil.FindTextBlock("138.60").Click
AIUtil("button", "SELECT FLIGHT").Click
AIUtil("text_box", "Passenger Name").Type "john"
AIUtil("button", "ORDER").Click


OrderNum = AIUtil.FindTextBlock(micAnyText, micWithAnchorOnLeft, AIUtil("check_mark", micAnyText, micFromBottom, 1)).GetText
Parameter("OrderNumberOut")= split(OrderNum, " ")(1)
msgbox Parameter("OrderNumberOut")


