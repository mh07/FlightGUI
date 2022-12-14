AIUtil.SetContext WpfWindow("wpftypename:=window", "regexpwndtitle:=Micro Focus MyFlight Sample Application", "devname:=Micro Focus MyFlight Sample Application")

AIUtil("button", "FIND FLIGHTS").Click
AIUtil.FindTextBlock("166.80").Click
AIUtil("button", "SELECT FLIGHT").Click
AIUtil("text_box", "Passenger Name").Type "john"
AIUtil("button", "ORDER").Click

OrderNumber = AIUtil.FindTextBlock(micAnyText, micWithAnchorOnLeft, AIUtil("check_mark", micAnyText, micFromBottom, 1)).GetText
Parameter("FlightOrderNumber") = split(OrderNumber, " ")(1)
