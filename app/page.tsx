"use client";

import { useState } from "react";

export default function Home() {
const [rating, setRating] = useState(0);
const [comment, setComment] = useState("");
const [submitted, setSubmitted] = useState(false);

const googleReviewUrl =
"https://search.google.com/local/writereview?placeid=ChIJqbWJbAD1GGARGFiiVhgs8g8";

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

<p className="text-sm text-gray-500 mt-4">
※ Googleマップアプリが開いた場合は、
<br />
「クチコミ」→ ★★★★★ をお願いします。
</p>
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

<p className="text-lg mb-4 leading-relaxed">
いただいた内容をもとに、
<br />
より良いお店づくりに活かします。
</p>

<p className="text-gray-600">
本日はご来店ありがとうございました。
</p>
</div>
</main>
);
}

return (
<main className="min-h-screen bg-orange-50 flex items-center justify-center p-6">
<div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full text-center">
<h1 className="text-2xl font-bold mb-4">
オオドリー桜新町店
</h1>

<p className="mb-4 text-lg">
本日の満足度を教えてください
</p>

<div className="flex justify-center gap-2 mb-6">
{[1, 2, 3, 4, 5].map((star) => (
<button
key={star}
onClick={() => setRating(star)}
className="text-4xl"
>
{star <= rating ? "★" : "☆"}
</button>
))}
</div>

<textarea
value={comment}
onChange={(e) => setComment(e.target.value)}
placeholder="感想を入力してください"
className="w-full border rounded-xl p-3 mb-4 h-32"
/>

<button
onClick={handleSubmit}
disabled={rating === 0}
className="w-full bg-red-500 text-white text-lg font-bold py-4 rounded-xl disabled:bg-gray-300"
>
送信
</button>
</div>
</main>
);
}
