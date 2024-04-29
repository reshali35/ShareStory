import "../Modal.css";
import "../SignIn.css";
import { Controller, useFormContext } from "react-hook-form";

const StoryForm5 = () => {
  const { control } = useFormContext();
  return (
    <>
      <form>
        <div className="formInput-container">
          <div className="input-label">
            <p id="Heading">Heading5:</p>
          </div>
          <Controller
            control={control}
            name="heading5"
            render={({ field }) => (
              <div className="input-box">
                <input type="text" placeholder="Your Heading" {...field} />
              </div>
            )}
          />

          <div className="input-label">
            <p id="description">Description:</p>
          </div>
          <Controller
            control={control}
            name="description5"
            render={({ field }) => (
              <div className="text-area">
                <textarea placeholder="Story Description" {...field} />
              </div>
            )}
          />

          <div className="input-label">
            <p id="storyImage">Image:</p>
          </div>
          <Controller
            control={control}
            name="imageUrl5"
            render={({ field }) => (
              <div className="input-box">
                <input type="text" placeholder="Add Image URL" {...field} />
              </div>
            )}
          />

          <div className="input-label">
            <p id="category">Category:</p>
          </div>
          <Controller
            control={control}
            name="category5"
            render={({ field }) => (
              <select className="input-box" {...field}>
                <option>Select Category</option>
                <option>Food</option>
                <option>Health and Fitness</option>
                <option>Travel</option>
                <option>Movies</option>
                <option>Education</option>
              </select>
            )}
          />
        </div>
      </form>
    </>
  );
};

export default StoryForm5;
