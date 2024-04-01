import React from "react";
import {
  Card,
  Typography,
} from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from "react-router-dom";




 
export function Sidebar () {
  const [hovered, setHovered] = React.useState(null);

  const handleMouseEnter = (index) => {
      setHovered(index);
  };

  const handleMouseLeave = () => {
      setHovered(null);
  };
 
  return (
    <Card className="h-fit w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <List>
            <Accordion
               expanded={hovered === 1}
               onMouseEnter={() => handleMouseEnter(1)}
               onMouseLeave={handleMouseLeave}
            >
                <AccordionSummary className="border-b-0 p-3 hover:bg-newgreen hover:text-white"
                    strokeWidth={2.5}
                    expandIcon={<ArrowForwardIosIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography color="blue-gray" className="mr-auto font-normal">
                        Vehicles
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className="py-1">
                    <List className="p-0">
                    <ListItem>
                        <Link to=""  className="hover:bg-newgreen hover:text-white">Cars</Link>
                    </ListItem>
                    <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Buses &amp; Micro Buses</Link>
                    </ListItem>
                    <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Heavy Equipment</Link>
                    </ListItem>     
                    <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Motorbikes &amp; Scooters</Link>
                    </ListItem>  
                    <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Trucks &amp; Trailers</Link>
                    </ListItem>     
                    <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Vehicle Parts &amp; Accessories</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="" className="hover:bg-newgreen hover:text-white">Watercrafts &amp; Boats</Link>
                    </ListItem>                  
                    </List>
                </AccordionDetails>
            </Accordion>
        </List>

        <List>
        <Accordion
           expanded={hovered ===2}
           onMouseEnter={() => handleMouseEnter(2)}
           onMouseLeave={handleMouseLeave}
        >
            <AccordionSummary className="border-b-0 p-3 hover:bg-newgreen hover:text-white"
                expandIcon={<ArrowForwardIosIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography color="blue-gray" className="mr-auto font-normal">
                Fashion
                </Typography>
            </AccordionSummary>
            <AccordionDetails className="py-1">
                <List className="p-0">
                <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Bags</Link>
                </ListItem>
                <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Clothing</Link>
                </ListItem>
                <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Clothing Accesories</Link>
                </ListItem>
                <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Jewelries</Link>
                </ListItem>
                <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Shoes</Link>
                </ListItem>
                <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Watches</Link>
                </ListItem>
                </List>
                <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Wedding Wears &amp; Accessories</Link>
                </ListItem>
            </AccordionDetails>
            </Accordion>
          </List>

          <List>
            <Accordion
              expanded={hovered === 3}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >  
                <AccordionSummary className="border-b-0 p-3 hover:bg-newgreen hover:text-white"
                    strokeWidth={2.5}
                    expandIcon={<ArrowForwardIosIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography color="blue-gray" className="mr-auto font-normal">
                        Services
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className="py-1">
                    <List className="p-0">
                    <ListItem>
                    <Link to="" className="hover:bg-newgreen hover:text-white">Automotive Services</Link>
                </ListItem>
                <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Building &amp; Trade Services</Link>
                </ListItem>
                <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Chauffeur &amp; Transfer Services</Link>
                </ListItem> 
                <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Childcare &amp; Education Services</Link>
                </ListItem>     
                <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Classes &amp; Courses</Link>
                </ListItem>
                <ListItem>
                    <Link to="" className="hover:bg-newgreen hover:text-white" >Cleaning Services</Link>
                </ListItem>
                <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Computer &amp; IT Services</Link>
                </ListItem>
                <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">DJ &amp; Entertainment</Link>
                </ListItem>
                <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Fitness &amp; Personal Training</Link>
                </ListItem>
                <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Health &amp; Beauty Services</Link>
                </ListItem>
                <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Landscaping &amp; Gardening</Link>
                </ListItem>
                <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Legal Services</Link>
                </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
        </List>

        <List>
            <Accordion
              expanded={hovered === 4}
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
             >
                <AccordionSummary className="border-b-0 p-3 hover:bg-newgreen hover:text-white"
                    strokeWidth={2.5}
                    expandIcon={<ArrowForwardIosIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography color="blue-gray" className="mr-auto font-normal">
                        Electronics
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className="py-1">
                    <List className="p-0">
                    <ListItem>
                    <Link to="" className="hover:bg-newgreen hover:text-white">Accessories &amp; Supplies For Electronics</Link>
                </ListItem>
                <ListItem>
                    <Link to="" className="hover:bg-newgreen hover:text-white">Laptops &amp; Computers</Link>
                </ListItem>
                <ListItem>
                    <Link to="" className="hover:bg-newgreen hover:text-white">TV &amp; DVD Equipment</Link>
                </ListItem> 
                <ListItem>
                    <Link to="" className="hover:bg-newgreen hover:text-white">Audio &amp; Music Equipment</Link>
                </ListItem>   
                <ListItem>
                    <Link to="" className="hover:bg-newgreen hover:text-white">Computer Accessories</Link>
                </ListItem>
                <ListItem>
                    <Link to="" className="hover:bg-newgreen hover:text-white">Computer Hardware</Link>
                </ListItem>
                <ListItem>
                    <Link to="" className="hover:bg-newgreen hover:text-white">Computer Monitors</Link>
                </ListItem>
                <ListItem>
                    <Link to="" className="hover:bg-newgreen hover:text-white">Headphones</Link>
                </ListItem>
                <ListItem>
                    <Link to="" className="hover:bg-newgreen hover:text-white">Networking Products</Link>
                </ListItem>
                <ListItem>
                    <Link to="" className="hover:bg-newgreen hover:text-white">Photo &amp; Video Cameras</Link>
                </ListItem>
                <ListItem>
                    <Link to="" className="hover:bg-newgreen hover:text-white">Printers &amp; Scanners</Link>
                </ListItem>
                <ListItem>
                    <Link to="" className="hover:bg-newgreen hover:text-white">Security &amp; Surveillance</Link>
                </ListItem>
                <ListItem>
                    <Link to="" className="hover:bg-newgreen hover:text-white">Software</Link>
                </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
        </List>

        <List>
            <Accordion
              expanded={hovered === 5}
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={handleMouseLeave}
            >
                <AccordionSummary className="border-b-0 p-3 hover:bg-newgreen hover:text-white"
                    strokeWidth={2.5}
                    expandIcon={<ArrowForwardIosIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography color="blue-gray" className="mr-auto font-normal">
                        Mobile Phones &amps; Tablets
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className="py-1">
                    <List className="p-0">
                    <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Mobile Phones</Link>
                    </ListItem>
                    <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Accessories For Mobile Phones &amp; Tablets</Link>
                    </ListItem>
                    <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Smart Watches and Trackers</Link>
                    </ListItem>   
                    <ListItem>
                    <Link to="" className="hover:bg-newgreen hover:text-white">Tablets</Link>
                </ListItem>       
                    </List>
                </AccordionDetails>
            </Accordion>
        </List>

        <List>
            <Accordion
              expanded={hovered === 6}
              onMouseEnter={() => handleMouseEnter(6)}
              onMouseLeave={handleMouseLeave}
            >
                <AccordionSummary className="border-b-0 p-3 hover:bg-newgreen hover:text-white"
                    strokeWidth={2.5}
                    expandIcon={<ArrowForwardIosIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography color="blue-gray" className="mr-auto font-normal">
                        Furnitures &amp; Appliances
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className="py-1">
                    <List className="p-0">
                    <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Furnitures</Link>
                    </ListItem>
                    <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Garden Supplies</Link>
                    </ListItem>
                    <ListItem>
                    <Link to=""  className="hover:bg-newgreen hover:text-white">Home Accessories</Link>
                    </ListItem> 
                    <ListItem>
                    <Link to="" className="hover:bg-newgreen hover:text-white">Home Appliances</Link>
                </ListItem>      
                <ListItem>
                    <Link to="" className="hover:bg-newgreen hover:text-white">Kitchen Appliances</Link>
                </ListItem> 
                <ListItem>
                    <Link to="" className="hover:bg-newgreen hover:text-white">Kitchen &amp; Cookware</Link>
                </ListItem>  
                <ListItem>
                    <Link to="" className="hover:bg-newgreen hover:text-white">Household Chemicals</Link>
                </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
        </List>

        <List>
            <Accordion
              expanded={hovered === 7}
              onMouseEnter={() => handleMouseEnter(7)}
              onMouseLeave={handleMouseLeave}
            >
                <AccordionSummary className="border-b-0 p-3 hover:bg-newgreen hover:text-white"
                    strokeWidth={2.5}
                    expandIcon={<ArrowForwardIosIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography color="blue-gray" className="mr-auto font-normal">
                        Health &amp; Beauty
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className="py-1">
                    <List className="p-0">
                    <ListItem>
                        Bath &amp; Body
                    </ListItem>
                    <ListItem>
                        Fragrances
                    </ListItem>
                    <ListItem>
                        Hair Beauty
                    </ListItem>
                    <ListItem>
                    <Link to="" >Make Up</Link>
                </ListItem>    
                <ListItem>
                    <Link to="" >Skincare</Link>
                </ListItem>   
                <ListItem>
                    <Link to="" >Tobacco Accessorie</Link>
                </ListItem>  
                <ListItem>
                    <Link to="" >Tools &amp; Accessories</Link>
                </ListItem> 
                <ListItem>
                    <Link to="" >Vitamins &amp; Supplements</Link>
                </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
        </List>

        <List>
            <Accordion
              expanded={hovered === 8}
              onMouseEnter={() => handleMouseEnter(8)}
              onMouseLeave={handleMouseLeave}
            >
                <AccordionSummary className="border-b-0 p-3 hover:bg-newgreen hover:text-white"
                    strokeWidth={2.5}
                    expandIcon={<ArrowForwardIosIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography color="blue-gray" className="mr-auto font-normal">
                        Commercial Equipment Tools
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className="py-1">
                    <List className="p-0">
                    <ListItem>
                    <Link to="" >Industrial Oven</Link>
                </ListItem>
                    <ListItem>
                    <Link to="" >Manufacturing Equipment</Link>
                </ListItem>
                <ListItem>
                    <Link to="" >Manufacturing Materials &amp; Tools</Link>
                </ListItem>    
                <ListItem>
                    <Link to="" >Medical Supplies &amp; Equipment</Link>
                </ListItem>  
                <ListItem>
                    <Link to="" >Restaurant &amp; Catering Equipment</Link>
                </ListItem>
                <ListItem>
                    <Link to="" >Safetywears &amp; Equipment</Link>
                </ListItem>
                <ListItem>
                    <Link to="" >Salon Equipment</Link>
                </ListItem>
                <ListItem>
                    <Link to="" >Stage Lighting &amp; Effect </Link>
                </ListItem>
                <ListItem>
                    <Link to="" >Stationery</Link>
                </ListItem>
                <ListItem>
                    <Link to="" >Store Equipment</Link>
                </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
        </List>
        {/* <ListItem>
          Commercial Equipment Tools
        </ListItem> */}
       <List>
            <Accordion
              expanded={hovered === 9}
              onMouseEnter={() => handleMouseEnter(9)}
              onMouseLeave={handleMouseLeave}
            >
                <AccordionSummary className="border-b-0 p-3 hover:bg-newgreen hover:text-white"
                    strokeWidth={2.5}
                    expandIcon={<ArrowForwardIosIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography color="blue-gray" className="mr-auto font-normal">
                        Properties
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className="py-1">
                    <List className="p-0">
                    <ListItem>
                    <Link to="" >New Builds</Link>
                </ListItem>
                <ListItem>
                    <Link to="" >Houses &amp; Apartments For Rent</Link>
                </ListItem>
                <ListItem>
                    <Link to="" >Houses &amp; Apartments For Sale</Link>
                </ListItem>
                <ListItem>
                    <Link to="" >Land For Rent</Link>
                </ListItem>   
                <ListItem>
                    <Link to="" >Land For Sale</Link>
                </ListItem> 
                <ListItem>
                    <Link to="" >Commercial Properties For Rent</Link>
                </ListItem>   
                <ListItem>
                    <Link to="" >Commercial Properties For Sale</Link>
                </ListItem>
                <ListItem>
                    <Link to="" >Event Centers, Venues &amp; Work Stations</Link>
                </ListItem>
                <ListItem>
                    <Link to="" >Shortlet Properties</Link>
                </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
        </List>
    </Card>
  );
}