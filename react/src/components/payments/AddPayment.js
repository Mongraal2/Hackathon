import React from "react";
import styles from "../payments/AddPayment.module.css";
const AddPayment = () => {
  return (
    <div>
      <section class="vh-100 gradient-custom w-100">
        <div class="container py-5 h-100">
          <div class="row ">
            <div class="col-12 col-lg-9 col-xl-7">
              <div
                class={styles.mainForm}
                style={{ borderRadius: "15px", width: "170%" }}
              >
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Add Payments</h3>
                  <form>
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="firstName"
                            class="form-control form-control-lg"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="lastName"
                            class="form-control form-control-lg"
                            placeholder="Account Number"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4 pb-2">
                        <div class="form-outline">
                          <input
                            type="date"
                            id="emailAddress"
                            class="form-control form-control-lg"
                            placeholder="Payment Date"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-4 pb-2">
                        <div class="form-outline">
                          <input
                            type="tel"
                            id="phoneNumber"
                            class="form-control form-control-lg"
                            placeholder="Total Amount"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-4 pb-2 ">
                        <select class="select form-control-lg w-100">
                          <option value="2">Subject 1</option>
                          <option value="3">Subject 2</option>
                          <option value="4">Subject 3</option>
                        </select>
                      </div>
                      <div class="col-md-6 mb-4 pb-2">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="phoneNumber"
                            class="form-control form-control-lg"
                            placeholder="Payment Status"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="form-outline mb-4">
                      <textarea
                        class="form-control"
                        id="form4Example3"
                        rows="4"
                        placeholder="Discription"
                      ></textarea>
                    </div>

                    <div class="mt-4 pt-2">
                      <input
                        class="btn btn-primary btn-lg"
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddPayment;
