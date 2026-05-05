"use client";

import { useState } from "react";

export default function Home() {
const [rating, setRating] = useState(0);
const [taste, setTaste] = useState("");
const [speed, setSpeed] = useState("");
const [service, setService] = useState("");
const [submitted, setSubmitted] = useState(false);

const googleReviewUrl =
"https://search.google.com/local/writereview?placeid=ChIJqbWJbAD1GGARGFiiVhgs8g8";

const options = ["非常に満足", "満足", "普通", "不満足"];

const canGoNext = rating > 0 && taste && speed && service;
<h1 className="text-3xl font-bold text-center mb-6">
オオドリー桜新町店
</h1>

<h2 className="text-xl text-center mb-4">
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

{rating > 0 && (
<div className="space-y-6 mb-8">
<Question
title="料理の味は如何でしたか？"
value={taste}
onChange={setTaste}
options={options}
/>

<Question
title="提供スピードは如何でしたか？"
value={speed}
onChange={setSpeed}
options={options}
/>

<Question
title="接客は如何でしたか？"
value={service}
onChange={setService}
options={options}
/>
</div>
)}

<button
onClick={handleSubmit}
disabled={!canGoNext}
className="w-full bg-red-500 text-white text-lg font-bold py-4 rounded-xl disabled:bg-gray-300"
>
次へ
</button>
</div>
</main>
);
}

function Question({
title,
value,
onChange,
options,
}: {
title: string;
value: string;
onChange: (value: string) => void;
options: string[];
}) {
return (
<div>
<p className="font-bold mb-3">{title}</p>

<div className="grid grid-cols-2 gap-3">
{options.map((option) => (
<button
key={option}
onClick={() => onChange(option)}
className={`border rounded-xl py-3 text-base ${
value === option
? "bg-red-500 text-white border-red-500"
: "bg-white text-black"
}`}
>
{option}
</button>
))}
</div>
</div>
);
}