import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <p className='fw-blod fs-5'> 1. Difference between authorization and authentication ?</p>
            <p>
                 <h4>Ans :</h4>         
                অথেন্টিকেশন দ্বারা মূলত বুঝায় ইউজারের ইমেইল পাসওয়ার্ড অথবা  আইডেন্টিটি, documentation সঠিক আছে কিনা এগুলো চেক করার প্রক্রিয়াকে অথেন্টিকেশন বলে

            অপরদিকে অথরাইজেশন বলতে user এর অথেন্টিকেশন চেক করে তাকে কোন বিষয়ে পারমিশন দেওয়া.একই অথোরাইজেশন বলে
            </p>

            <p className='fw-blod fs-5'>
            2. Why are you using firebase? What other options do you have to implement authentication?
            </p>
            <p>
                <h4>Ans</h4>
                ওয়েবসাইটের অথেন্টিকেশন একটিভ করার জন্য আমরা মূলত ফায়ারবেজ  use করি.
                Top Alternatives To Firebase :
                <li>Parse.</li>
                <li>AWS Amplify.</li>
                <li>PubNub.</li>
                <li>Back4App.</li>
                <li>Couchbase.</li>
                <li>Kuzzle.</li>
                <li>NativeScript.</li>
                <li>LoopBack.</li>
            </p>

            <p>
           3.What other services does firebase provide other than authentication?
           <p></p>

            </p>
        </div>
    );
};

export default Blog;