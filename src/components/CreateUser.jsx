import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createUser } from "../reducer/UserSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const CreateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const closeAfter15 = () =>
    toast("A New user will be created", {
      type: toast.TYPE.SUCCESS,
      autoClose: 2000,
    });


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      company: {
        name: "",
      },
      phone: "",
      website: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
      },
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Please enter the User name";
      }

      if (!values.email) {
        errors.email = "Please enter the Position";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.company.name) {
        errors.company = {...errors.company, name:"Please enter the company"};
      }
      if (!values.website) {
        errors.website = "Please enter the company website";
      }

      if (!values.phone) {
        errors.phone = "Please enter the Mobile No";
      }
      if (!values.address.street) {
        errors.address = {
          ...errors.address,
          street: "Please enter the street",
        };
      }

      if (!values.address.suite) {
        errors.address = { ...errors.address, suite: "Please enter the suite" };
      }

      if (!values.address.city) {
        errors.address = { ...errors.address, city: "Please enter the city" };
      }

      if (!values.address.zipcode) {
        errors.address = {
          ...errors.address,
          zipcode: "Please enter the zipcode",
        };
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://65615e6adcd355c08323c948.mockapi.io/users",
          values
        );
        dispatch(createUser(response.data));

        navigate("/");
        closeAfter15();
      } catch (error) {
        console.error(error);
        alert("Something went wrong");
      }
    },
  });
  return (
    <div className="container-fluid">
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-4 mb-3">
            <label className=" form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.getFieldMeta('name').touched && formik.errors.name ? (
              <div className="text-danger">{formik.errors.name}</div> 
            ): null
            }
          </div>
          <div className="col-lg-4 mb-3">
            <label className=" form-label">E-mail</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
             {formik.getFieldMeta('email').touched && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div> 
            ): null
            }
          </div>
          <div className="col-lg-4 mb-3">
            <label className=" form-label">Company</label>
            <input
              type="text"
              className="form-control"
              name="company.name"
              value={formik.values.company.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.getFieldMeta('company.name').touched &&formik.errors.company?.name ? (
              <div className="text-danger">{formik.errors.company.name}</div>
            ):null}
          </div>
          <div className="col-lg-4 mb-3">
            <label className=" form-label">Phone</label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.getFieldMeta('phone').touched && formik.errors.phone?(
              <div className="text-danger">{formik.errors.phone}</div>
            ):null}
          </div>
          <div className="col-lg-4 mb-3">
            <label className=" form-label">Website</label>
            <input
              type="text"
              className="form-control"
              name="website"
              value={formik.values.website}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
                        {formik.getFieldMeta('website').touched && formik.errors.website?(
              <div className="text-danger">{formik.errors.website}</div>
            ):null}
          </div>

          <div className="col-lg-4 mb-3">
            <label className="form-label">Street</label>
            <input
              type="text"
              className="form-control"
              name="address.street"
              value={formik.values.address.street}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
           {formik.getFieldMeta('address.street').touched &&formik.errors.address?.street ? (
              <div className="text-danger">{formik.errors.address.street}</div>
            ):null}
          </div>

          <div className="col-lg-4 mb-3">
            <label className="form-label">Suite</label>
            <input
              type="text"
              className="form-control"
              name="address.suite"
              value={formik.values.address.suite}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.getFieldMeta('address.suite').touched &&formik.errors.address?.suite ? (
              <div className="text-danger">{formik.errors.address.suite}</div>
            ):null}
          </div>

          <div className="col-lg-4 mb-3">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              name="address.city"
              value={formik.values.address.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}

            />
            {formik.getFieldMeta('address.city').touched &&formik.errors.address?.city ? (
              <div className="text-danger">{formik.errors.address.city}</div>
            ):null}
          </div>

          <div className="col-lg-4 mb-3">
            <label className="form-label">Zipcode</label>
            <input
              type="text"
              className="form-control"
              name="address.zipcode"
              value={formik.values.address.zipcode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}

            />
            {formik.getFieldMeta('address.zipcode').touched &&formik.errors.address?.zipcode ? (
              <div className="text-danger">{formik.errors.address.zipcode}</div>
            ):null}
          </div>

          <div className="col-lg-12 text-center mt-4">
            <input type="submit" className="btn btn-primary px-5 col-lg-3 py-2" value={"Submit"} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
