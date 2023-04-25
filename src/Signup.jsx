import axios from 'axios'
import React, { useState } from 'react'



const Signup = () => {
    let [data, updatedata] = useState({ name: '', email: '', address: '', password: '' })
    function change(e) {
        updatedata({ ...data, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className='img'>
            <div className='std-div'>
                    <p className='student-quoute'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aspernatur omnis officiis, nulla provident atque vero minus cumque aliquam voluptatibus sequi sapiente temporibus doloribus est natus labore numquam? Modi, aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem debitis officiis at! Sint, magni cupiditate. Sit esse illo soluta expedita animi assumenda totam quibusdam adipisci cum aspernatur, recusandae exercitationem consequuntur!</p>
                    </div>
                <div className='userps'>
                    
                    <div className='' style={{ width: '22rem' }}>
                        <form className='form-control' onSubmit={(e) => {
                            e.preventDefault();
                            async function signup() {
                                let res = await axios.post('http://tanveerpp.pythonanywhere.com/emps/', data)

                                if (res.status === 201) {
                                    alert('sucessfully signed up');
                                }
                            }
                            signup()
                        }}>
                            <h3 class="card-title text-center">Signup</h3><br></br>
                            Name<input type="text" name="name" value={data.name} onChange={change} className='form-control' /><br></br>
                            Email<input type="email" name="email" value={data.email} onChange={change} className='form-control' />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div><br></br>
                            Password<input type="password" name="password" value={data.password} onChange={change} className='form-control' /><br></br>
                            Address<input type="text" name="address" value={data.address} onChange={change} className='form-control' /><br></br>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                <label class="form-check-label" for="flexCheckIndeterminate">
                                    i agreed to all T&C
                                </label>
                            </div>
                            <button className='btn btn-success my-4 text-center'>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup