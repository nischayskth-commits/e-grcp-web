import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Card,
  CardContent,
  Tabs,
  Tab,
  Typography,
} from "@mui/material";

import {
  fetchVendors,
} from "../redux/vendorSlice";

import VendorBreadcrumbs from "../components/VendorBreadcrumbs";
import VendorHeader from "../components/VendorHeader";
import VendorOverview from "../components/VendorOverview";
import VendorContacts from "../components/VendorContacts";
import VendorDocuments from "../components/VendorDocuments";

const VendorProfile = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const { vendors } = useSelector(
    (state) => state.vendor
  );

  const [tab, setTab] = useState(0);





  useEffect(() => {
    if (vendors.length === 0) {
      dispatch(fetchVendors());
    }
  }, [dispatch, vendors.length]);

  if (vendors.length === 0) {
    return (
      <Typography variant="h5">
        Loading Vendor...
      </Typography>
    );
  }

  const vendor = vendors.find(
    (item) => item.id === id
  );

  if (!vendor) {
    return (
      <Typography variant="h5">
        Vendor not found.
      </Typography>
    );
  }



 



  return (
    <Box>

      <VendorBreadcrumbs
        id={vendor.id}
      />

     <VendorHeader
  vendor={vendor}
/>

      <Card
        elevation={3}
        sx={{
          borderRadius: 3,
        }}
      >
        <CardContent>

          <Tabs
            value={tab}
            onChange={(e, value) =>
              setTab(value)
            }
            sx={{ mb: 3 }}
          >
            <Tab label="Basic Details" />

            <Tab label="Contacts" />

            <Tab label="Documents" />

          
          </Tabs>

          {tab === 0 && (
            <VendorOverview
              vendor={vendor}
            />
          )}

          {tab === 1 && (
            <VendorContacts
              vendor={vendor}
            />
          )}

          {tab === 2 && (
            <VendorDocuments
              vendor={vendor}
            />
          )}

         

        </CardContent>
      </Card>

     

     

    

    </Box>
  );
};

export default VendorProfile;