import { bytesToMB } from "@/lib/utils";
import * as yup from "yup"


export const homeSchema = yup
.object({
  title:yup.string().min(5).max(50).required(),
  country:yup.string().min(5).max(50).required(),
  state:yup.string().min(5).max(50).required(),
  city:yup.string().min(5).max(50).required(),
  price:yup.number().required().typeError("Amount should be number."),
  description:yup.string().min(10).max(20000).required(),
  categories:yup.mixed<Array<string> | []>().test("categories", "Please Select at least one category", (data:any) => {
    const isValid = data?.length >= 1;
    return isValid
  }),
  image:yup.mixed().test("image", "only JPEG , PNG , WEPB images are allowed", (file:any) => {
    const isValid = file?.type === "image/jpeg" || file?.type === "image/jpg" || file?.type === "image/png" || file?.type === "image/wepb";
    return isValid
  }).test("imageSize", "Image must be less than 2 MB", (file:any) => {
    const isValid = bytesToMB(file?.size) <= 2
    return isValid
  })
})
.required()

export type AddHomeType = yup.InferType<typeof homeSchema>