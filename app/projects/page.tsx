
import { Card } from "../components/Card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects Mar Kiniec Carlisle',
};


export default function Page() {
    return (
        <div className="  ">  {/*bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0  */}

           
                  < div className="container flex items-center justify-center min-h-screen   mx-auto mx-w-md">
				<div className=" overflow-y-scroll h-150 ml-5 mr-5  item-center justify-center mx-w-md ">
            
                   <Card>
                    <div className="  grid grid-cols-1  px-5 mx-auto max-w-md">
                     <h2 className="  divider font-bold text-2xl py-15 lg:text-2xl  ">Research and Development </h2>
                     <div className=" px-5 text-xl  ">
                        <h3 className='italic'> <abbr title ="Amazon Web Services ">AWS </abbr>Cloud Resume </h3>
                             <ul className= "list-disc hover-zoom:list-disc  list-inside indent-4 "> 
                                <li>  Designed and built a static website applying frontend technologies HTML, JavaScript, and TailwindCSS in a web application utilizing technology framework Next.js.  </li>
                                <li> Orchestrated and implemented a multi-tier cloud-based solution leveraging AWS serverless architectures Lambda, <abbr title ="Application Programming Interface">API </abbr>Gateway and 
                                        DynamoDB for access control and security.</li>
                                <li>Configured and managed CloudFormation templates to automate infrastructure, CloudFront Distributions for secure content delivery, 
                                    S3 for static website hosting, Route53 with hosted zones and health checks for domain maintenance.</li>
                                <li>Implemented <abbr title ="Continious Intergration Continous Deployment">CI/CD </abbr> pipelines using GitHub Actions to reduce code deployment to production time from 2 hours to 10 minutes.</li>
                                <li>Deployed AWS resources programmatically through the AWS <abbr title ="Command Line Interface">CLI </abbr> automating scripts.</li>
                                <li>Deployed <abbr title ="Web Application Firewall">WAF </abbr> to monitor and protect CloudFront along with API Gateway against <abbr title="Distriuted Denial of Service attacks"> DDS</abbr>, improved web traffic visiblity.</li>
                                <li> Uitlized Github to perform code review of the project&apos;s code and contribute to other repositories. </li>
                                <li>Enhancement of understanding of AWS service integration, improved agile development practices, and cloud engineering solution driven results.</li>
                            </ul>
                            </div>
                        </div>
                   </Card>
                </div>
            </div>
        </div>
    );
}