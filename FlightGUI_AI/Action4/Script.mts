AIUtil.SetContext WpfWindow("wpftypename:=window", "regexpwndtitle:=Micro Focus MyFlight Sample Application", "devname:=Micro Focus MyFlight Sample Application")

NewSearch = AIUtil.FindText("New Search").Exist
If NewSearch Then
AIUtil.FindText("New Search").Click	
End If
AIUtil("button", "SEARCH ORDER").Click
AIUtil("radio_button", "(@]").SetState "On"
AIUtil.FindTextBlock("Order number").TypeSecure Parameter("OrderNumber")
AIUtil("button", "SEARCH").Click
