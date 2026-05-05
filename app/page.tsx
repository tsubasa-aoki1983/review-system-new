"use client";



import { useState } from "react";



export default function Home() {



  const [rating, setRating] = useState(0);



  const [visitCount, setVisitCount] = useState("");



  const [taste, setTaste] = useState("");



  const [speed, setSpeed] = useState("");



  const [service, setService] = useState("");



  const [comment, setComment] = useState("");



  const options = ["非常に満足", "満足", "普通", "不満足"];



  return (



    <main



      style={{



        padding: 24,



        maxWidth: 480,



        margin: "0 auto",



        fontFamily: "sans-serif",



      }}



    >



      <h1 style={{ marginBottom: 24 }}>満足度アンケート</h1>



      {/* ステップ1 */}



      <h2>ステップ1：お店の満足度を星の数で選択してください</h2>



      <div style={{ fontSize: 40, marginBottom: 32 }}>



        {[1, 2, 3, 4, 5].map((star) => (



          <span



            key={star}



            onClick={() => setRating(star)}



            style={{



              cursor: "pointer",



              color: star <= rating ? "#FFD700" : "#CCC",



            }}



          >



            ★



          </span>



        ))}



      </div>



      {/* ステップ2 */}



      <h2>ステップ2：来店回数</h2>



      <div style={{ marginBottom: 32 }}>



        {["初めて", "2回目", "3回以上"].map((item) => (



          <button



            key={item}



            onClick={() => setVisitCount(item)}



            style={{



              margin: 4,



              padding: "10px 16px",



              borderRadius: 8,



              border: "1px solid #ccc",



              backgroundColor: visitCount === item ? "#000" : "#fff",



              color: visitCount === item ? "#fff" : "#000",



              cursor: "pointer",



            }}



          >



            {item}



          </button>



        ))}



      </div>



      {/* ステップ3 */}



      <h2>ステップ3：料理のお味はいかがでしたか？</h2>



      <div style={{ marginBottom: 32 }}>



        {options.map((item) => (



          <button



            key={item}



            onClick={() => setTaste(item)}



            style={{



              margin: 4,



              padding: "10px 16px",



              borderRadius: 8,



              border: "1px solid #ccc",



              backgroundColor: taste === item ? "#000" : "#fff",



              color: taste === item ? "#fff" : "#000",



              cursor: "pointer",



            }}



          >



            {item}



          </button>



        ))}



      </div>



      {/* ステップ4 */}



      <h2>ステップ4：提供スピードはいかがでしたか？</h2>



      <div style={{ marginBottom: 32 }}>



        {options.map((item) => (



          <button



            key={item}



            onClick={() => setSpeed(item)}



            style={{



              margin: 4,



              padding: "10px 16px",



              borderRadius: 8,



              border: "1px solid #ccc",



              backgroundColor: speed === item ? "#000" : "#fff",



              color: speed === item ? "#fff" : "#000",



              cursor: "pointer",



            }}



          >



            {item}



          </button>



        ))}



      </div>



      {/* ステップ5 */}



      <h2>ステップ5：接客はいかがでしたか？</h2>



      <div style={{ marginBottom: 32 }}>



        {options.map((item) => (



          <button



            key={item}



            onClick={() => setService(item)}



            style={{



              margin: 4,



              padding: "10px 16px",



              borderRadius: 8,



              border: "1px solid #ccc",



              backgroundColor: service === item ? "#000" : "#fff",



              color: service === item ? "#fff" : "#000",



              cursor: "pointer",



            }}



          >



            {item}



          </button>



        ))}



      </div>



      {/* 感想 */}



      <h2>感想を入力してください</h2>



      <textarea



        value={comment}



        onChange={(e) => setComment(e.target.value)}



        placeholder="ご感想をご入力ください"



        style={{



          width: "100%",



          height: 120,



          padding: 12,



          borderRadius: 8,



          border: "1px solid #ccc",



          marginTop: 8,



        }}



      />



      {/* 送信ボタン */}



      <button



        onClick={() => {



          if (rating >= 4) {



            window.open(



              "https://www.google.com/maps/place/%E3%82%AA%E3%82%AA%E3%83%89%E3%83%AA%E3%83%BC%E6%A1%9C%E6%96%B0%E7%94%BA%E5%BA%97/@35.6315742,139.6445981,17z/data=!4m8!3m7!1s0x6018f5006c89b5a9:0xff22c1856a25818!8m2!3d35.6315742!4d139.647173!9m1!1b1!16s%2Fg%2F11yx74qnv_?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D",



              "_blank"



            );



          } else {



            alert("貴重なご意見ありがとうございます！");



          }



        }}



        style={{



          marginTop: 24,



          width: "100%",



          padding: "14px",



          borderRadius: 10,



          border: "none",



          backgroundColor: "#000",



          color: "#fff",



          fontSize: 16,



          cursor: "pointer",



        }}



      >



        送信



      </button>



    </main>



  );



}

