Function LaunchFlightGUI
	SystemUtil.Run "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"
End Function
LaunchFlightGUI

AIUtil.SetContext WpfWindow("wpftypename:=window", "regexpwndtitle:=Micro Focus MyFlight Sample Application", "devname:=Micro Focus MyFlight Sample Application")
AIUtil("text_box", "Username").Type "john"
AIUtil("text_box", "Password").Type "hp"
AIUtil.FindText("OK").Click



