import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
function Myfooter() {
  return (
    <footer className="full-footer">
      <div className="upper-footer">
       <div className="locater-footer">
        <h3>Branch & ATM Locator</h3>
        <form>
          <div className='select-btn'>
          <input type='radio' value="branch" checked="checked" name="type"/>
          <label>Branch</label>
          <input type='radio' value='atm' name='type'/>
          <label>ATM</label>
          </div>
          <input  className='find-span' type='text' name='searctype' placeholder='Branch/Zipcode/City/District' required autoComplete='off'/>
          <button type="submit" name="submit" value="Find" className='branchatm-btn'>Find</button>
        </form>
       </div>
       <div  className="allitems-footer"></div>
      </div>

      <div className="lower-footer">
        <ul className='footer-itmes-li'>
          <div>
          <li><Link>Aadhaar Authentication Through OTP</Link></li>
          <li><Link>Block Lost ATM Card</Link></li>
          <li><Link>Right to Information Act 2005</Link></li>
          <li><Link>UDGAM Portal</Link></li>
          <li><Link>Interest Certificate</Link></li>
          <li><Link>Aadhaar Seeding Online</Link></li>
          <li><Link>Bank Holiday</Link></li>
          </div>
          <div>
          <li><Link>MSME</Link></li>
          <li><Link>Apply Online for Home Loan</Link></li>
          <li><Link>Regulatory Disclosures Section</Link></li>
          <li><Link>Sukanya Samriddhi Account</Link></li>
          <li><Link>IB Retiree Portal</Link></li>
          <li><Link>Security</Link></li>
          <li><Link>Block Lost Credit Card</Link></li>
          </div>
          <div>
          <li><Link>IB Staff Portal</Link></li>
          <li><Link>Financial Inclusion</Link></li>
          <li><Link>Complaints Portal</Link></li>
          <li><Link>IPV6</Link></li>
          <li><Link>N R I / Foreign Exchange</Link></li>
          <li><Link>Customer Centric Services</Link></li>
          <li><Link>Service Charges</Link></li>
          </div>
          <div>
          <li><Link>Approved Housing Projects</Link></li>
          <li><Link>Empanelment Of DSA/HLC</Link></li>
          <li><Link>Credit Card Customer Portal</Link></li>
          <li><Link>Debenture Trustee</Link></li>
          <li><Link>CVC Integrity Pledge</Link></li>
          <li><Link>RBI Floating Rate Savings Bond 2020</Link></li>
          <li><Link>FAQ - Home loans</Link></li>
          </div>
        </ul>
      </div>
    </footer>
  )
}

export default Myfooter