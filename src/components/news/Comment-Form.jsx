"use client";
import SubmitButton from "@/components/master/SubmitButton";
import { ErrorToast, IsEmpty, SuccessToast } from "@/utility/FormHelper";
import { useState } from "react";

const CommentForm = (props) => {
  let id = parseInt(props.postID);
  
  // import { useRouter } from "next/navigation";
  // const router = useRouter();
 //   router.push("/user");
  //   const router = useRouter();
  // router.push("/user");

  let [data, setData] = useState({ descriptions: "", postID: id });
  let [submit, setSubmit] = useState(false);

  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };
// jjjjj
  const formSubmit = async () => {
    if (IsEmpty(data.descriptions)) {
      ErrorToast("There have no text");
    } else {
      setSubmit(true);
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      let res = await (await fetch("/api/comments/manage", options)).json();

      setSubmit(false);
      setData({ descriptions: "", postID: id });
      if (res["status"] === "success") {
        SuccessToast("Request Success");
      } else {
        ErrorToast("Something wrong !  ");
      }

    }
  };
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 p-4">
          <h5 className="mb-3">Write Yours</h5>
          <textarea
            value={data.descriptions}
            rows={6}
            onChange={(e) => {
              inputOnChange("descriptions", e.target.value);
            }}
            className="form-control mb-2"
          />
          <SubmitButton
            className="btn btn-danger mt-3"
            onClick={formSubmit}
            submit={submit}
            text="Submit"
          />
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
