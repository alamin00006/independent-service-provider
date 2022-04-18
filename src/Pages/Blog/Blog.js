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
           <h4>Ans</h4>
           <p>ফায়ারবেস্ট প্রথমত তিনটি প্রোডাক্ট প্রোভাইড করে: <p className='fs-5'>Build, Release & Monitor, Engage </p>
                <ul className='fs-5'>Build এর মাধ্যমে আমরা এই সার্ভিসগুলো পেয়ে থাকি:
                    <li>Realtime Database</li>
                    <li>Remote Config</li>
                    <li>Firebase ML</li>
                    <li>Cloud Functions</li>
                    <li>Authentication</li>
                    <li>Cloud Messaging</li>
                    <li>Hosting</li>
                    <li>Cloud Storage</li>
                </ul>
                <ul className='fs-5'>Release & Monitor এর মাধ্যমে আমরা এই সার্ভিসগুলো পেয়ে থাকি:
                    <li>Google Analytics</li>
                    <li>Remote Config</li>
                    <li>Performance monitoring</li>
                    <li>Test Lab</li>
                    <li>App Distribution</li>
                </ul>
                <ul className='fs-5'>Engage এর মাধ্যমে আমরা এই সার্ভিসগুলো পেয়ে থাকি : 
                <li>Google Analytics</li>
                <li>A/B testing</li>
                <li>Authentication</li>
                <li>Cloud Messaging</li>
                <li>Crashlytics</li>
                <li>Dynamic Links</li>
                <li>In-App Messaging</li>
                </ul>
           </p>

            </p>
        </div>
    );
};

export default Blog;