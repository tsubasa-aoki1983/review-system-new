"use client";

import { useState } from "react";

export default function Home() {
const [step, setStep] = useState(1);

const [rating, setRating] = useState(0);
const [taste, setTaste] = useState("");
const [speed, setSpeed] = useState("");
const [service, setService] = useState("");

const [submitted, setSubmitted] = useState(false);

const googleReviewUrl =
"https://search.google.com/local/writereview?placeid=ChIJqbWJbAD1GGARGFiiVhgs8g8";

const options = ["非常に満足", "満足", "普通", "不満足"];

const handleSubmit = () => {
setSubmitted(true);
};

if (submitted && rating >= 4) {
return (
<main className="min-h-screen bg-orange-50 flex items-center justify-center p-6">
<div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full text-center">
<h1 className="text-2xl font-bold mb-4">
ご来店ありがとうございます！🙏
</h1>

<p className="text-lg mb-6 leading-relaxed">
あと30秒だけお願いします！
<br />
<br />
① 下のボタンを押す
<br />
② Googleマップの「クチコミ」を開く
<br />
③ ★★★★★ をタップ
<br />
<br />
スタッフの励みになります！
</p>

<a
href={googleReviewUrl}
target="_blank"
rel="noopener noreferrer"
className="block bg-red-500 text-white text-lg font-bold px-6 py-4 rounded-xl"
>
Googleで応援する
</a>
</div>
</main>
);
}

if (submitted && rating <= 3) {
return (
<main className="min-h-screen bg-orange-50 flex items-center justify-center p-6">
<div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full text-center">
<h1 className="text-2xl font-bold mb-4">
ご意見ありがとうございます
</h1>

<p className="text-lg leading-relaxed">
より良いお店づくりに活かします。
</p>
</div>
</main>
);
}

return (
<main className="min-h-screen bg-orange-50 flex items-center justify-center p-6">
<div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full">

{step === 1 && (
<>
<h1 className="text-3xl font-bold text-center mb-6">
オオドリー桜新町店
</h1>

<h2 className="text-xl text-center mb-6">
ステップ1
<br />
本日の満足度を星の数で教えてください
</h2>

<div className="flex justify-center gap-2 mb-8">
{[1, 2, 3, 4, 5].map((star) => (
<button
key={star}
onClick={() => setRating(star)}
className="text-5xl"
>
{star <= rating ? "★" : "☆"}
</button>
))}
</div>

<button
onClick={() => setStep(2)}
disabled={rating === 0}
className="w-full bg-red-500 text-white text-lg font-bold py-4 rounded-xl disabled:bg-gray-300"
>
次へ
</button>
</>
)}

{step === 2 && (
<>
<h2 className="text-2xl font-bold text-center mb-6">
ステップ2
<br />
料理の味は如何でしたか？
</h2>

<div className="space-y-4">
{options.map((option) => (
<button
key={option}
onClick={() => {
setTaste(option);
setStep(3);
}}
className="w-full border rounded-xl py-4 text-lg"
>
{option}
</button>
))}
</div>
</>
)}

{step === 3 && (
<>
<h2 className="text-2xl font-bold text-center mb-6">
ステップ3
<br />
提供スピードは如何でしたか？
</h2>

<div className="space-y-4">
{options.map((option) => (
<button
key={option}
onClick={() => {
setSpeed(option);
setStep(4);
}}
className="w-full border rounded-xl py-4 text-lg"
>
{option}
</button>
))}
</div>
</>
)}

{step === 4 && (
<>
<h2 className="text-2xl font-bold text-center mb-6">
ステップ4
<br />
接客は如何でしたか？
</h2>

<div className="space-y-4">
{options.map((option) => (
<button
key={option}
onClick={() => {
setService(option);
setStep(5);
}}
className="w-full border rounded-xl py-4 text-lg"
>
{option}
</button>
))}
</div>
</>
)}

{step === 5 && (
<>
<h2 className="text-2xl font-bold text-center mb-6">
ご協力ありがとうございました！
</h2>

<button
onClick={handleSubmit}
className="w-full bg-red-500 text-white text-lg font-bold py-4 rounded-xl"
>
送信する
</button>
</>
)}
</div>
</main>
);
}
