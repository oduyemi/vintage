import { Box } from "@mui/material";
import { Link } from "@mui/icons-material";
import Button from "./elements/Button";



export const SellForm = () => {
    return(
        <Box margin="10px" className="h-screen mx-auto border rounded-md shadow">
            <form className="max-w-sm mx-auto w-full">
                <h1 className='text-center text-3xl  hover:text-lightorange font-extrabold py-2 text-greene'>Post Ad</h1>
                    {/* {flashMessage && (
                        <Box className={`text-${flashMessage.type} text-center my-3 text-blu`}>
                            {flashMessage.message}
                    </Box>
                    )} */}
                <Box className="flex flex-col pt-10">
                    <label htmlFor="category" className="">Category</label>
                    <select className="border mb-1 rounded-md" required>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                    <label htmlFor="subCategory" className="">Sub-Category</label>
                    <select className="border mb-1 rounded-md" required>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select><hr/>
                    <legend className="text-sm text-green-800">
                        Add up to 3 product images. At least one image is required
                    </legend>
                    <hr/>
                    <label htmlFor="photo1" className="">Photo</label>
                    <input type="file" name="photo1" className="border mb-1 rounded-md" required />
                    <label htmlFor="photo2" className="">Photo</label>
                    <input type="file" name="photo2" className="border mb-1 rounded-md" />
                    <label htmlFor="photo3" className="">Photo</label>
                    <input type="file" name="photo3" className="border mb-1 rounded-md" />
                   
                    <Button type="submit" className="h-8 mt-5 ">Next</Button>
                </Box>
               
            </form>
        </Box>
    )
}