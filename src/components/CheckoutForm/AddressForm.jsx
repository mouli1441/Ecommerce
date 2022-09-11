import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  Grid,
  MenuItem,
  Button,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./CustomCkeckField";
import { commerce } from "../../lib/commerce";

const AddressForm = ({ checkoutToken }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  // const fetchShippingCountries = async (checkoutTokenId) => {
  //   commerce.services
  //     .localeListShippingCountries(checkoutTokenId)
  //     .then((response) => setShippingCountries(response));
  // };

  const fetchShippingCountries = async (checkoutTokenId) => {
    console.log(checkoutTokenId, "sjfgsjgfkh");
    // const { countries } = await commerce.services.localeListShippingCountries(
    //   checkoutTokenId
    // );

    //   console.log(countries, "lcjfgkhxvdxliu");
    //   setShippingCountries(countries);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  const methods = useForm();

  return (
    <>
      <Typography variant="h6" gutterbottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit="">
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="Firstname" />
            <FormInput required name="lastName" label="Lastname" />
            <FormInput required name="address1" label="Addess" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="ZIP" label="ZIP/Postal Code" />
            {/* <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select name="" fullWidth mode="onChange">
                <MenuItem key="" value="">
                  Select Me
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select name="" fullWidth mode="onChange">
                <MenuItem key="" value="">
                  Select Me
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping options</InputLabel>
              <Select name="" fullWidth mode="onChange">
                <MenuItem key="" value="">
                  Select Me
                </MenuItem>
              </Select>
            </Grid> */}
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
