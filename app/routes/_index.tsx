import { useLoaderData } from "@remix-run/react";

import type { LoaderFunction, MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export let loader: LoaderFunction = async () => {
  const customHtml = `
   <p></p>
<p align="center"><img src="https://contractor-foreman-images.s3.us-west-2.amazonaws.com/58123/estimates/large/DiamondRockCoD15dR00aP02ZL-Tyler1b.png" data-filename="file" class="" style="width: 50%;"><span style="font-family: Arial; font-size: 24px;"><br></span></p>
<p align="center" style="margin-left: 25px;"><span style="font-weight: 700; color: unset;"><span style="color: unset;"><span style="font-size: 24px; font-family: Verdana;">Concrete Polishing System</span></span></span></p>
<p align="center" style="margin-left: 25px;"><u style="color: unset;"><span style="font-weight: 700; color: rgb(156, 0, 0);"><span style="font-family: Verdana; font-size: 18px;">[PROJECT_NAME]</span><span style="font-size: 18px; font-family: Verdana;">﻿</span></span></u><span style="font-size: 18px; color: rgb(156, 0, 0); font-weight: bold; font-family: Verdana;"><u style="color: unset;"></u></span><span style="font-size: 18px; color: rgb(156, 0, 0); font-weight: bold; font-family: Verdana;"></span><span style="font-size: 14px; font-family: Verdana;"></span></p>
<p align="center" style="margin-left: 25px;"><span style="font-family: Verdana; font-size: 12px;">[ESTIMATE_DATE]</span><span style="font-size: 14px;">﻿</span><span style="font-size: 14px; font-family: Verdana;"></span><span style="font-size: 14px; font-family: Verdana;"><br></span><img src="https://contractor-foreman-images.s3.us-west-2.amazonaws.com/58123/estimates/large/Chinese_Theater.jpg" data-filename="file" style="font-family: inherit; letter-spacing: -1px; font-size: 2.4rem; width: 50%;"></p>
<p></p>
<div style="text-align: center;"><span style="font-weight: bold; text-decoration-line: underline; color: rgb(156, 0, 0); font-family: Verdana; font-size: 12px;">Presented To</span></div>
<div style="text-align: center;"><span style="font-family: Verdana; font-size: 12px;">[CUSTOMER_FIRST] [CUSTOMER_LAST]</span></div>
<div style="text-align: center;"><span style="font-family: Verdana; font-size: 12px;">[CUSTOMER_COMPANY]</span></div>
<div style="text-align: center;"><span style="font-family: Verdana; font-size: 12px;">[CUSTOMER_STREET]</span></div>
<div style="text-align: center;"><span style="font-family: Verdana; font-size: 12px;">[CUSTOMER_CITY] [CUSTOMER_STATE] [CUSTOMER_ZIP]</span></div>
<p></p>
<p></p>
<div style="text-align: center;"><span style="font-weight: bold; text-decoration-line: underline; color: rgb(156, 0, 0); font-family: Verdana; font-size: 12px;">Presented By</span></div>
<div style="text-align: center;"><span style="font-family: Verdana; font-size: 12px;">[USER_FIRST_NAME] [USER_LAST_NAME]</span></div>
<p></p>
<p style="text-align: center;"><span style="font-family: Verdana; font-size: 12px;">[PAGE_BREAK]</span></p>
<p style="text-align: center;"><img src="https://contractor-foreman-images.s3.us-west-2.amazonaws.com/58123/estimates/large/DiamondRockCoD15dR00aP02ZL-Tyler1b_3.jpg" data-filename="file" style="color: rgb(26, 26, 26); font-family: Roboto, Arial, sans-serif; letter-spacing: unset; width: 299px;"></p>
<p style="text-align: left; box-sizing: inherit; line-height: 1.6; color: rgb(26, 26, 26); outline: none; font-family: Roboto, Arial, sans-serif;"><span style="font-family: Verdana;"><span style="font-size: 12px; font-family: Verdana;">Dear&nbsp;</span><span style="font-size: 12px; font-family: Verdana;">[CUSTOMER_FIRST] [CUSTOMER_LAST],&nbsp;</span></span></p>
<p class="MsoNormal" style="text-align: left; margin-top: 0in; margin-bottom: 0in; line-height: normal;"><span style="color: rgb(26, 26, 26); font-size: 12px; font-family: Verdana;">Thank you for the opportunity to provide you with our Diamond Polishing Concrete flooring solution for your project.&nbsp;</span><span style="font-size: 11.5pt; font-family: Verdana, sans-serif;"><span style="font-family: Verdana; font-size: 12px;">[USER_COMPANY] has been working with clients throughout [USER_STATE] helping them meet their construction goals.&nbsp; We are confident that we can meet the needs of your project and stay on schedule and on budget.</span></span></p>
<p class="MsoNormal" style="text-align: left; margin-top: 0in; margin-bottom: 0in; line-height: normal;"><span style="font-size: 11.5pt; font-family: Verdana, sans-serif;"><span style="font-family: Verdana; font-size: 14px;"><br></span></span></p>
<ul style="margin: inherit; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 35px !important; list-style-position: initial !important; list-style-image: initial !important;">
   <li style="text-align: left; margin-bottom: 0in; margin-top: 0in; line-height: normal;"><span style="font-family: Verdana; font-size: 12px; text-indent: -0.25in;">We are timely and efficient. Never will we leave you in the dark about the work being done.</span></li>
   <li style="text-align: left; margin-bottom: 0in; margin-top: 0in; line-height: normal;"><span style="font-family: Verdana; font-size: 12px;">We are honest and dependable. Your property will be treated with care and respect throughout the project.</span></li>
   <li style="text-align: left; margin-bottom: 0in; margin-top: 0in; line-height: normal;"><span style="font-family: Verdana; font-size: 12px;">We are experienced and knowledgeable. Our team knows how to get the job done right the first time.</span></li>
</ul>
<p class="MsoNormal" style="text-align: left; margin-bottom: 0in; line-height: normal;"><span style="color: rgb(26, 26, 26); font-size: 12px; font-family: Verdana;">&nbsp;</span></p>
<p class="MsoNormal" style="text-align: left; margin-bottom: 0in; line-height: normal;">
   <span style="color: rgb(26, 26, 26); font-size: 11.5pt; font-family: Verdana, sans-serif;">
      <span style="font-family: Verdana; font-size: 12px;">The following proposal is for the installation of our Diamond Polishing System as we discussed previously.</span>
      <o:p></o:p>
   </span>
</p>
<p class="MsoNormal" style="text-align: left; margin-bottom: 0in; line-height: normal;"><span style="font-size: 12px; font-family: Verdana;">&nbsp;</span></p>
<p class="MsoNormal" style="text-align: left; margin-top: 0in; margin-bottom: 0in; line-height: normal;">
   <span style="color: rgb(26, 26, 26); font-size: 11.5pt; font-family: Verdana, sans-serif;">
      <span style="font-family: Verdana; font-size: 12px;">Diamond Polishing flooring provides safe yet smooth, high-sheen floors that are durable and low maintenance. Additionally, polished concrete floors can create high light-reflectivity, providing a bright, clean look to your facility, without the need for extra, costly overhead lighting.</span>
      <o:p></o:p>
   </span>
</p>
<p class="MsoNormal" style="text-align: left; margin-top: 0in; margin-bottom: 0in; line-height: normal;"><span style="color: rgb(26, 26, 26); font-size: 12px; font-family: Verdana;">&nbsp;</span></p>
<p class="MsoNormal" style="text-align: left; margin-top: 0in; margin-bottom: 0in; line-height: normal;">
   <span style="font-size: 11.5pt; font-family: Verdana, sans-serif;">
      <span style="font-family: Verdana; font-size: 12px;">Some advantages of Diamond Polishing over traditional coatings/resurfacing systems are:</span>
      <o:p></o:p>
   </span>
</p>
<p class="MsoNormal" style="text-align: left; margin-top: 0in; margin-bottom: 0in; line-height: normal;"><span style="font-size: 12px; font-family: Verdana;">&nbsp;</span></p>
<ul style="margin: inherit; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 35px !important; list-style-position: initial !important; list-style-image: initial !important;">
   <li style="text-align: left; margin-bottom: 0in; line-height: normal;"><span style="font-size: 11.5pt; font-family: Verdana, sans-serif;"><span style="font-family: Verdana; font-size: 12px;">Immediate use of the area upon completion</span></span></li>
   <li style="text-align: left; margin-bottom: 0in; line-height: normal;"><span style="font-family: Verdana; font-size: 12px;">Decreased tire marking and scuffs</span></li>
   <li style="text-align: left; margin-bottom: 0in; line-height: normal;"><span style="font-family: Verdana; font-size: 12px;">Withstands the toughest use - resistant to impact, thermal shock, abrasion, and wear</span></li>
   <li style="text-align: left; margin-bottom: 0in; line-height: normal;"><span style="font-family: Verdana; font-size: 12px;">Safe, smooth, slip-resistant surface</span></li>
   <li style="text-align: left; margin-bottom: 0in; line-height: normal;"><span style="font-family: Verdana; font-size: 12px;">Resistant to spills, chemicals, oils, dust, and other contaminants</span></li>
   <li style="text-align: left; margin-bottom: 0in; line-height: normal;"><span style="font-family: Verdana; font-size: 12px;">More consistent look overtime, no discoloration from sunlight</span></li>
   <li style="text-align: left; margin-bottom: 0in; line-height: normal;"><span style="font-family: Verdana; font-size: 12px;">High light-reflectivity</span></li>
   <li style="text-align: left; margin-bottom: 0in; line-height: normal;"><span style="font-family: Verdana; font-size: 12px;">Easy - and inexpensive - to clean and maintain</span></li>
   <li style="text-align: left; margin-bottom: 0in; line-height: normal;"><span style="font-family: Verdana; font-size: 12px;">Environmentally Friendly</span></li>
</ul>
<p class="MsoNormal" style="margin-bottom: 0in; line-height: normal;"></p>
<div style="text-align: left;"><font face="Verdana, sans-serif"><span style="font-size: 15.3333px;"><br></span></font></div>
<span style="font-family: Verdana; font-size: 14px;">
   <div style="text-align: left;"><span style="color: initial; letter-spacing: unset; font-family: Verdana; font-size: 12px;">Furthermore, Diamond Polished floors are installed with our own experience and highly trained professionals. Our years of experience in Diamond Polishing brings the highest quality of concrete polishing for your flooring needs.</span></div>
</span>
<p></p>
<p class="MsoNormal" style="text-align: left; margin-top: 0in; margin-bottom: 0in; line-height: normal;"><span style="font-size: 12px; font-family: Verdana;">&nbsp;</span></p>
<p class="MsoNormal" style="text-align: left; margin-top: 0in; margin-bottom: 0in; line-height: normal;">
   <span style="font-size: 12px; font-family: Verdana;">We look forward to working with you throughout this project and seeing the plans become a reality.</span>
   <span style="color: rgb(26, 26, 26); font-size: 11.5pt; font-family: Verdana, sans-serif;">
      <o:p></o:p>
   </span>
</p>
<p class="MsoNormal" style="text-align: left; margin-top: 0in; margin-bottom: 0in; line-height: normal;"><span style="font-size: 12px; font-family: Verdana;">&nbsp;</span></p>
<p class="MsoNormal" style="text-align: left; margin-top: 0in; margin-bottom: 0in; line-height: normal;">
   <span style="font-size: 11.5pt; font-family: Verdana, sans-serif;">
      <span style="font-family: Verdana; font-size: 12px;">Sincerely,</span>
      <o:p></o:p>
   </span>
</p>
<p style="box-sizing: inherit; line-height: 1.6; color: rgb(26, 26, 26); outline: none; font-family: Roboto, Arial, sans-serif;"><span style="font-family: Verdana; font-size: 14px;"></span></p>
<p align="right"><span style="text-align: start; font-family: Verdana; font-size: 18px;"></span><span style="text-align: start; font-family: Verdana; font-size: 18px;"></span><span style="text-align: start; font-family: Verdana; font-size: 14px;"></span></p>
<p class="MsoNormal" style="text-align: left; margin-top: 0in; margin-bottom: 0in; line-height: normal;"><span style="font-size: 11.5pt; font-family: Verdana, sans-serif;"><span style="font-family: Verdana; font-size: 12px;">-Your Team at [USER_COMPANY]</span></span></p>
<p></p>
<span style="font-family: Verdana; font-size: 12px;">    </span>
<p></p>
  `;

  return { customHtml };
};

export default function Index() {
  const { customHtml } = useLoaderData<typeof loader>();
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: customHtml }} />
    </div>
  );
}
