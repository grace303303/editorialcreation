let eeid, utmcampaign, preheader, imagefolder, imagetype;

function submitbasic() {
    eeid = $('input[name="eeid"]').val();
    utmcampaign = $('input[name="utmcampaign"]').val();
    preheader = $('input[name="preheader"]').val();
    imagefolder = $('input[name="imagefolder"]').val();
    imagetype = $("input[name=imagetype]:checked").val();
 
    if (eeid!=='' && utmcampaign!=='' && imagefolder!=='' && imagetype!==undefined) {
    alert("Successfully enter all basic info!");
    }
    
    console.log(imagetype);
}

function get_header() {
return `
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN">
   <html>
      <head>
         <!--[if gte mso 9]>
         <xml>
            <o:OfficeDocumentSettings>
               <o:AllowPNG/>
               <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
         </xml>
         <!--<![endif]-->
         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
         <meta name="format-detection" content="telephone=no"/>
         <meta name="format-detection" content="address=no"/>
         <meta name="robots" content="noindex,nofollow"/>
         <title></title>
         <link href="https://www.rakuten.com/rebrand/fonts" rel="stylesheet" type="text/css"/>
         <!--[if !mso]><!-->
         <style type="text/css">
            @import url("https://www.rakuten.com/rebrand/fonts");
         </style>
         <!--<![endif]-->
         <style type="text/css">
            @media only screen 
            and (min-device-width : 414px)
            and (-webkit-min-device-pixel-ratio : 3) \{
            .zoomFix \{height:85px !important;}
            }
            @media only screen and (max-width : 414px)\{œ 
            .footer_text\{
            width:300px !important;
            }
            .tiny_text\{
            max-width:60px !important;
            }
            .hide\{
            display:none !important;
            }
            .show\{
            display:block !important;
            max-height: none !important;
            align-content: center;
            }
            }
            @media-screen\{
            @font-face\{
            font-family:'fontawesome-webfont';
            font-style:normal;
            font-weight:400;
            src:local('fontawesome-webfont'), local('fontawesome-webfont'), url('/global_files/fonts/icon/fontawesome/v.4.5.0.7/fonts/fonts.1.1.5/fontawesome-webfont.woff?283bah') format('woff'); 
            }
            @font-face\{
            font-family:'Benton Sans Med';
            font-style:normal;
            font-weight:400;
            src:local('Benton Sans Med'), url('/global_files/fonts/BentonSans/BentonSansRAK-Medium.woff') format('woff'); 
            }
            @font-face\{
            font-family:'Benton Sans Lt';
            font-style:normal;
            font-weight:400;
            src:local('Benton Sans Lt'), url('/global_files/fonts/BentonSans/BentonSansRAK-Light.woff') format('woff'); 
            }
            @font-face\{
            font-family:'Benton Sans Reg';
            font-style:normal;
            font-weight:400;
            src:local('Benton Sans Reg'), url('/global_files/fonts/BentonSans/BentonSansRAK-Regular.woff') format('woff'); 
            }
            @font-face\{
            font-family:'Stag Web';
            font-style:normal;
            font-weight:400;
            src:local('Stag Web'), url('/global_files/fonts/stag/Stag-Medium-Web.woff') format('woff'); 
            }
            }
            .ExternalClass \{width:100%;}
            .linksColorWhite a\{color:#ffffff !important;text-decoration:none !important;}
            .linksColorBlack a\{color:#000000 !important;text-decoration:none !important;}
            /*
            Addresses, phone numbers, and dates can be changed to links. This removes the applied link styling. Content still remains cickable. This fix does not work in Gmail.
            */
         </style>
         <style type="text/css">
            .preheader \{ display:none !important; visibility:hidden; opacity:0; color:transparent; height:0; width:0; }
         </style>
      </head>
      <!--Start Wrapper Table-->
      <body bgcolor="#f2f2f2" style="margin:0px;padding:0px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;">
         <span class="preheader" style="color:transparent; display:none !important; height:0; opacity:0; visibility:hidden; width:0">${preheader}</span>
         <div class="preheader" style="color:transparent; display:none !important; height:0; opacity:0; visibility:hidden; width:0">
           &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
         </div>
         <#assign utmDate = .now?date?iso_utc> 
         <#assign eeid = '${eeid}'>
         <#assign utmCampaign = '${utmcampaign}'>
   		  
         <table align="center" border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" width="100%">
            <tr>
               <td align="center">
                  <!--Start Body-->
                  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" width="100%" bgcolor="#ffffff">   <!--Nav-->
                     <tr>
                        <td align="center">
                           <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; padding:0; margin:0px; background-color: #ffffff" align="center" width="520">
                              <!--Rakuten Logo-->
                              <tr>
                                 <td><a href="https://www.rakuten.com/?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}"><img border="0"  src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/template_nav/EML_Nav_NoDivider.png" width="520" alt="Rakuten"/></a></td>
                              </tr>
                              <!--Rakuten Logo Ends-->
                           </table>
                        </td>
                     </tr>
                     <!-- End Nav -->
            <!-- Body -->
                  <tr>
                     <td style="line-height:0px;" align="center">
                        <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff" width="520">
                        <!--hero-->
                         <tr><td style="line-height:0px;"><img alt="The best summer clearance" border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/${imagefolder}/1.${imagetype}" width="520" style="border: 0; display: block;" /></td></tr>
                        <!--hero ends-->`;
}

function get_footer() {
   return `  </table>
                     </td>
                  </tr> <!--Body Ends-->
<!--Footer starts-->
                  <tr>
                     <td align="center">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; padding:0; margin:0px;" bgcolor="#f2f2f2" align="center">
                           <tr>
                              <td align="center">
                                 <table width="520" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; padding:0; margin:0px; background-color: #f2f2f2" bgcolor="#f2f2f2" align="center">
                                    <!--[if !mso]><!-->
                                    <tr>
                                       <td align="center">
                                          <!--desktop only starts-->
                                          <table cellpadding="0" cellspacing="0" border="0" class="hide">
                                             <tr>
                                                <td>
                                                   <table cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                         <td><a href="https://www.rakuten.com/referral/default.do?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}"><img border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2020_footer_darkmode/footer-gray-01.png" style="display:block;" height="200" alt=""/></a>
                                                         </td>
                                                         <td><a href="https://www.rakuten.com/mobile.htm?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}"><img border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2020_footer_darkmode/footer-gray-02.png" style="display:block;" height="200" alt=""/></a>
                                                         </td>
                                                         <td><a href="https://www.rakuten.com/button.htm?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}"><img border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2020_footer_darkmode/footer-gray-03.png" style="display:block;" height="200" alt=""/></a>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <table cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                         <td><a href="https://www.rakuten.com/in-store.htm?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}"><img border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2020_footer_darkmode/footer-gray-04.png" style="display:block;" height="200" alt=""/></a>
                                                         </td>
                                                         <td><a href="https://www.rakuten.com/travel-vacations?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}"><img border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2020_footer_darkmode/footer-gray-05.png" style="display:block;" height="200" alt=""/></a>
                                                         </td>
                                                         <td><a href="https://www.rakuten.com/dining.htm?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}"><img border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2020_footer_darkmode/footer-gray-06.png" style="display:block;" height="200" alt=""/></a>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <table cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                         <td><a href="https://www.rakuten.com/help?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}"><img border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2020_footer_darkmode/footer-gray-07.png" style="display:block;" width="520" alt=""/></a>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                             </tr>
                                          </table>
                                          <!--desktop only ends-->
                                          <!--mobile only starts-->
                                          <table cellpadding="0" cellspacing="0" border="0"  class="show" style="display:none; max-height:0px; overflow:hidden; mso-hide: all;font-size: 0px; line-height: 0px; " align="center">
                                             <tr>
                                                <td>
                                                   <table cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                         <td><a href="https://www.rakuten.com/referral/default.do?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}"><img border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2020_footer_darkmode/footer-gray-01-mobile.png" style="display:block;" width="260" alt=""/></a>
                                                         </td>
                                                         <td><a href="https://www.rakuten.com/mobile.htm?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}"><img border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2020_footer_darkmode/footer-gray-02-mobile.png" style="display:block;" width="260" alt=""/></a>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <table cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                         <td><a href="https://www.rakuten.com/button.htm?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}"><img border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2020_footer_darkmode/footer-gray-03-mobile.png" style="display:block;" width="260" alt=""/></a>
                                                         </td>
                                                         <td><a href="https://www.rakuten.com/in-store.htm?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}"><img border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2020_footer_darkmode/footer-gray-04-mobile.png" style="display:block;" width="260" alt=""/></a>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <table cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                         <td><a href="https://www.rakuten.com/travel-vacations?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}"><img border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2020_footer_darkmode/footer-gray-05-mobile.png" style="display:block;" width="260" alt=""/></a>
                                                         </td>
                                                         <td><a href="https://www.rakuten.com/dining.htm?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}"><img border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2020_footer_darkmode/footer-gray-06-mobile.png" style="display:block;" width="260" alt=""/></a>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <table cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                         <td><a href="https://www.rakuten.com/help?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}"><img border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2020_footer_darkmode/footer-gray-07-mobile.png" style="display:block;" width="520" alt=""/></a>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                             </tr>
                                          </table>
                                          <!--mobile only ends-->
                                       </td>
                                    </tr>
                                    <!--<![endif]-->
                                    <!--[if (gte mso 9)|(IE)]>  
                                    <tr>
                                       <td align="center">
                                          <table cellpadding="0" cellspacing="0" border="0" class="hide">
                                             <tr>
                                                <td>
                                                   <table cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                         <td><a href="https://www.rakuten.com/referral/default.do?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}"><img border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2020_footer_darkmode/footer-gray-01.png" style="display:block;" height="200" alt=""/></a>
                                                         </td>
                                                         <td><a href="https://www.rakuten.com/mobile.htm?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}"><img border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2020_footer_darkmode/footer-gray-02.png" style="display:block;" height="200" alt=""/></a>
                                                         </td>
                                                         <td><a href="https://www.rakuten.com/button.htm?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}"><img border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2020_footer_darkmode/footer-gray-03.png" style="display:block;" height="200" alt=""/></a>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <table cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                         <td><a href="https://www.rakuten.com/in-store.htm?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}"><img border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2020_footer_darkmode/footer-gray-04.png" style="display:block;" height="200" alt=""/></a>
                                                         </td>
                                                         <td><a href="https://www.rakuten.com/travel-vacations?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}"><img border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2020_footer_darkmode/footer-gray-05.png" style="display:block;" height="200" alt=""/></a>
                                                         </td>
                                                         <td><a href="https://www.rakuten.com/dining.htm?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}"><img border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2020_footer_darkmode/footer-gray-06.png" style="display:block;" height="200" alt=""/></a>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <table cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                         <td><a href="https://www.rakuten.com/help?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}"><img border="0" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2020_footer_darkmode/footer-gray-07.png" style="display:block;" width="520" alt=""/></a>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                </td>
                                             </tr>
                                          </table>
                                       </td>
                                    </tr>
                                    <!--<![endif]-->
                                 </table>
                              </td>
                           </tr>
                        </table>
                     </td>
                  </tr>
                  <tr>
                     <td align="center">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; padding:0; margin:0px;" bgcolor="#252525" align="center">
                           <tr>
                              <td style="font-size:0px;line-height:0px;" width="1"><img src="http://www.rakuten.com/email/x.gif" alt="" border="0" style="display:block;" height="40" width="1" /></td>
                           </tr>
                           <tr>
                              <td align="center">
                                 <table border="0" cellpadding="0" cellspacing="0" >
                                    <tr>
                                       <td style="font-size:0px;line-height:0px;">
                                          <a href="https://www.facebook.com/dialog/feed?app_id=214330088590858&link=https://www.rakuten.com%3Fref_id=$\{Recipient.ACTIVE_TAF_SHORT_NAME}%26eeid=$\{eeid}&picture=https://www.rakuten.com/blog/wp-content/uploads/2017/01/social_raf_share_brands.jpg&name=Cash+Back+at+Stores+You+Love&caption=&description=Start+earning+Cash+Back%21+Get+a+%2410+Welcome+Bonus+when+you+join+with_this+invite.&redirect_uri=http://www.facebook.com"><img border="0" style="display:block;" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/template_nav/facebook.png" width="14" height="25" alt=""/></a>
                                       </td>
                                       <td style="font-size:0px;line-height:0px;"><img src="http://www.rakuten.com/email/x.gif" alt="" border="0" style="display:block;" height="1" width="50" /></td>
                                       <td style="font-size:0px;line-height:0px;">
                                          <a href="https://twitter.com/intent/tweet?text=I'm+getting+Cash+Back+at+my+favorite+stores+with+Rakuten+and+you+can+too!+sUse+my+link+to+join+and+get+a+$10+Welcome+Bonus:&url=https%3A%2F%2Fwww.rakuten.com%3Fref_id=$\{Recipient.ACTIVE_TAF_SHORT_NAME}%26eeid=$\{eeid}"><img border="0" style="display:block;" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/template_nav/twitter.png" width="26" height="25" alt=""/></a>
                                       </td>
                                       <td style="font-size:0px;line-height:0px;"><img src="http://www.rakuten.com/email/x.gif" alt="" border="0" style="display:block;" height="1" width="50" /></td>
                                       <td style="font-size:0px;line-height:0px;">
                                          <a href="https://www.instagram.com/rakuten/"><img border="0" style="display:block;" src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/template_nav/instagram.png" width="30" height="30" alt=""/></a>
                                       </td>
                                    </tr>
                                 </table>
                              </td>
                           </tr>
                           <tr>
                              <td style="font-size:0px;line-height:0px;" width="1"><img src="http://www.rakuten.com/email/x.gif" alt="" border="0" style="display:block;" height="40" width="1" /></td>
                           </tr>
                           <tr>
                              <td align="center">
                                 <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; padding:0; margin:0px;">
                                    <tr>
                                       <td><a href="https://www.rakuten.com/?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}"><img src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/template_nav/logo-RAK.png" style="display:block;" width="224" alt="Rakuten" border="0"/></a></td>
                                    </tr>
                                 </table>
                              </td>
                           </tr>
                           <tr>
                              <td style="font-size:0px;line-height:0px;" width="1"><img src="http://www.rakuten.com/email/x.gif" alt="" border="0" style="display:block;" height="20" width="1" /></td>
                           </tr>
                           <tr>
                              <td class="tiny_text" align="center" style="font-family:'Benton Sans','Benton Sans Lt', Helvetica, Arial, sans-serif;font-size:14px;line-height:22px;color:#ffffff;font-weight: 300; text-align: center" width="400">&copy; <span class="linksColorWhite">$\{.now?string('yyyy')} Ebates Inc. dba Rakuten<br/>800 Concar Drive, San Mateo, CA 94402</span>
                              </td>
                           </tr>
                           <tr>
                              <td style="font-size:0px;line-height:0px;" width="1"><img src="http://www.rakuten.com/email/x.gif" alt="" border="0" style="display:block;" height="25" width="1" /></td>
                           </tr>
                           <tr>
                              <td align="center" style="font-family:'Benton Sans','Benton Sans Lt', Helvetica, Arial, sans-serif; font-size:14px;line-height:17px;color:#ffffff; font-weight: 300" ><a STYLE="text-decoration:none;color:#ffffff;" href="https://www.rakuten.com/my-ebates.htm?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}">MY ACCOUNT</a>&#160;&#160;&#160;|&#160;&#160;&#160;<a STYLE="text-decoration:none;color:#ffffff;" href="https://www.rakuten.com/help?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}">HELP</a>
                              </td>
                           </tr>
                           <tr>
                              <td style="font-size:0px;line-height:0px;"><img src="http://www.rakuten.com/email/x.gif" alt="" border="0" style="display:block;" height="10" width="1" /></td>
                           </tr>
                           <tr>
                              <td align="center">
                                 <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; padding:0; margin:0px;" align="center">
                                    <tr>
                                       <td  class="footer_text" align="center" style="font-family:'Benton Sans','Benton Sans Lt', Helvetica, Arial, sans-serif;font-size:14px;line-height:22px;color:#ffffff;font-weight: 300" width="400">Prices, offers and Cash Back are subject to change. Restrictions may apply. Your privacy is important to us. Please read our 
                                          <a href="https://www.rakuten.com/privacy_policy.htm?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}" style="color:#ffffff;">Privacy Policy</a>.
                                          To get the most relevant deals,
                                          <a href="https://www.rakuten.com/favorites.htm?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}" style="color:#ffffff;">add your favorite stores</a>.
                                       </td>
                                    </tr>
                                 </table>
                              </td>
                           </tr>
                           <tr>
                              <td style="font-size:0px;line-height:0px;"><img src="http://www.rakuten.com/email/x.gif" alt="" border="0" style="display:block;" height="10" width="1" /></td>
                           </tr>
                           <tr>
                              <td align="center">
                                 <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; padding:0; margin:0px;">
                                    <tr>
                                       <td align="center" style="font-family:'Benton Sans','Benton Sans Lt', Helvetica, Arial, sans-serif;font-size:14px;line-height:22px;color:#ffffff;font-weight: 300" width="400" class="footer_text">If you no longer wish to receive promotional emails, please 
                                          <a href="https://www.rakuten.com/subscriptions.htm?eeid=$\{eeid}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=$\{utmCampaign}&utm_content=$\{utmDate}&ebtoken=$\{Recipient.JWT_TOKEN}" style="color:#ffffff;">unsubscribe here</a>.
                                          <br/><a href="$\{Gears.microsite()}" style="color:#ffffff;">View in browser.</a>
                                       </td>
                                    </tr>
                                 </table>
                              </td>
                           </tr>
                           <tr>
                              <td style="font-size:0px;line-height:0px;" width="1"><img src="http://www.rakuten.com/email/x.gif" alt="" border="0" style="display:block;" height="116" width="1" /></td>
                           </tr>
                        </table>
                     </td>
                  </tr>
                  <!--Footer Ends-->

               </table>
            </td>
         </tr>
      </table>
   </body>
</html>`;
}
