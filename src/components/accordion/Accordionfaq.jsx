import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Accordionfaq.scss'
import { Box } from '@mui/material';

const Accordionfaq = () =>{
    return(
        <Box id="faq">
          <div className="gradient-1"></div>
          <h1>Frequently Asked Questions</h1>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What is Total Tax Solutions?</Typography>
          </AccordionSummary>
          <AccordionDetails className='faq-content'>
            <Typography className='faq-content-p'>
            Established in the year 2012, Total Tax Solutions in Kammanahalli, Bangalore is a top player in category Auditors in the Bangalore. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Bangalore.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br/>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel1a-header"
          >
            <Typography>What are the services we offer?</Typography>
          </AccordionSummary>
          <AccordionDetails className='faq-content'>
            <Typography className='faq-content-p'>
              We offer services like pan card, Income Tax, GST Consultants, Loan Consultants, Company Registration, Import/Export License, Shop Establishment Services, Partnership Registration, Legal Advisors, Property Consultants, Business Consultants, Auditiors and many more!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>How long does an audit process take?</Typography>
          </AccordionSummary>
          <AccordionDetails className='faq-content'>
            <Typography className='faq-content-p'>
            The duration of an audit depends on the size and complexity of the business. A standard audit can take several weeks to complete, while more complex audits may take several months.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br/>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>How often should a business undergo an audit?</Typography>
          </AccordionSummary>
          <AccordionDetails className='faq-content'>
            <Typography className='faq-content-p'>
            The frequency of audits varies depending on the size of the business and regulatory requirements. Typically, annual audits are common for most businesses, but some may require more frequent audits.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br/>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='faq-content-p'>Why do businesses need audits?</Typography>
          </AccordionSummary>
          <AccordionDetails className='faq-content'>
            <Typography>
            Businesses require audits for various reasons, including compliance with legal and regulatory requirements, gaining investor and stakeholder trust, and identifying areas for improvement in financial management.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br/>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What happens if audit findings reveal errors or non-compliance?</Typography>
          </AccordionSummary>
          <AccordionDetails className='faq-content'>
            <Typography className='faq-content-p'>
            If audit findings identify errors or non-compliance with accounting standards, auditors will work with the company to rectify the issues and ensure corrective actions are taken.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What are the payment options available to the customers?</Typography>
          </AccordionSummary>
          <AccordionDetails className='faq-content'>
            <Typography className='faq-content-p'>
            Pay for the service with ease by using any available modes of payment, such as Cash, Cheques, Credit and Debit Cards, IMPS, Master Card, NEFT, RTGS, UPI, Visa Card, RuPay Card, PhonePe, Paytm, GPay, BHIM, Amazon Pay.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What are the operational timings?</Typography>
          </AccordionSummary>
          <AccordionDetails className='faq-content'>
            <Typography className='faq-content-p'>
            This establishment is functional from 10 am - 08 pm.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    )
}
export default Accordionfaq;