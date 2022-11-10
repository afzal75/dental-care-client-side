import { toast, ToastContainer } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
    useTitle('Add Service')
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const img = form.img.value;
        const description = form.description.value;
        console.log(title, price, description, img)

        const service = {
            title: title,
            price: price,
            description: description,
            img: img,
        }
        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){
                    toast('Added Service SuccessFully')
                }
            })
            .catch(error => console.error(error))
    }


    return (
        <div className='mt-10 w-3/4 m-auto'>
            <form onSubmit={handleAddService}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='title' type="text" placeholder="Service Name" className="input input-ghost input-bordered w-full" />
                    <input name='price' type="text" placeholder="Price" className="input input-ghost input-bordered w-full" />
                    <input name='img' type="text" placeholder="IMG" className="input input-ghost input-bordered w-full" required />
                    {/* <input name='email' type="text" placeholder="Your Email"  className="input input-ghost input-bordered w-full" readOnly /> */}
                </div>
                <textarea name='description' className="textarea textarea-bordered w-full h-24 mt-2" placeholder="Your Description" required></textarea>

                <input className='btn btn-warning' type="submit" value="Add Service" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddService;