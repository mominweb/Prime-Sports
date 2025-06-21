
const  {ObjectId } = require('mongodb');
const express = require('express');
require('dotenv').config()
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());





const uri = `mongodb+srv://${process.env.SPORT_DB}:${process.env.SPORT_PASS}@cluster0.lkt9fh9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

console.log(process.env.SPORT_DB) 
console.log(process.env.SPORT_PASS) 

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
const db = client.db("SportsDB");//  DB name creation
const productCollection = db.collection("products"); // collection name creation

   

    app.post ('/api/seed-products',async (req,res ) => {

   // avoid same 15 items repeat
const existing = await productCollection.countDocuments();
if (existing > 0) {
  return res.send({ message: 'Products already seeded.' });
};


      const sampleProducts =
      [
       {
    name: "Football",
    price: "20$",
    stock: "25",
    category: "Ball",
    image: "https://i.ibb.co/gLP3K2Tk/Football-Pallo-valmiina-cropped.jpg"
  },
  {
    name: "Basketball",
    price: "25$",
    stock: "15",
    category: "Ball",
    image: "https://i.ibb.co/1YWhx7Pn/Kid-with-baskteball-Basketball-768x539.jpg"
  },
  {
    name: "Tennis Racket",
    price: "45$",
    stock: "12",
    category: "Racket",
    image: "https://i.ibb.co/ynSHPp6K/racket.jpg"
  },
  {
    name: "Baseball Glove",
    price: "30$",
    stock: "18",
    category: "Gear",
    image: ""
  },
  {
    name: "Cricket Bat",
    price: "35$",
    stock: "20",
    category: "Bat",
    image: "https://i.ibb.co/Y4Dg2dTR/bat.jpg"
  },
  {
    name: "Hockey Stick",
    price: "40$",
    stock: "10",
    category: "Stick",
    image: "https://i.ibb.co/Y4Dg2dTR/bat.jpg"
  },
  {
    name: "Badminton Shuttlecock Pack",
    price: "10$",
    stock: "50",
    category: "Shuttle",
    image: "https://i.ibb.co/Y4Dg2dTR/bat.jpg"
  },
  {
    name: "Table Tennis Paddle",
    price: "18$",
    stock: "25",
    category: "Racket",
    image: "https://i.ibb.co/Y4Dg2dTR/bat.jpg"
  },
  {
    name: "Rugby Ball",
    price: "22$",
    stock: "17",
    category: "Ball",
    image: "https://i.ibb.co/tM6fPjCj/rugby-ball.webp"
  },
  {
    name: "Boxing Gloves",
    price: "55$",
    stock: "8",
    category: "Gear",
    image: "https://i.ibb.co/cK0pt98j/boxing.jpg"
  },
  {
    name: "Skateboard",
    price: "70$",
    stock: "5",
    category: "Board",
    image: "https://i.ibb.co/fVmFdptt/goggles.jpg"
  },
  {
    name: "Swimming Goggles",
    price: "12$",
    stock: "30",
    category: "Accessory",
    image: "https://i.ibb.co/fVmFdptt/goggles.jpg"
  },
  {
    name: "Yoga Mat",
    price: "28$",
    stock: "22",
    category: "Mat",
    image: "https://i.ibb.co/1tytP3C2/mat.jpg"
  },
  {
    name: "Dumbbells Set",
    price: "60$",
    stock: "14",
    category: "Weights",
    image: "https://i.ibb.co/6cn7wtBP/dumble.jpg"
  },
  {
    name: "Volleyball",
    price: "24$",
    stock: "19",
    category: "Ball",
    image: "https://i.ibb.co/qLq4Vbjq/volleyball-ball-Ya-KZAR7-600.jpg"
  }
    ];

 
     const result = await productCollection.insertMany(sampleProducts);
  res.send(result);

    } );


    // to get 
    app.get('/api/products', async (req, res) => {
  const products = await productCollection.find().toArray(); // api e joto gulo thakbe tar moddhe theke limited items select kora jabe .find er por .limit(14) orthat prothom 14 ta ui te dekhabe 
  

  console.log(`${products.length} products fetched.`);
  res.send(products);
});
 
// to get one ID (details button e ekta product dekhanor jonno)

app.get ('/api/products/:id' , async (req, res) => {
try {
const id = req.params.id;
const product = await productCollection.findOne({_id: new ObjectId(id)});
if (!product) {
  return res.status(404).json({error:"Invalid product ID"});

}

res.send(product);
}
catch (error) {
  res.status(404).json({error: "Invalidproduct ID" })
}

});








    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



console.log("SPORT_DB:", process.env.SPORT_DB);
console.log("SPORT_PASS:", process.env.SPORT_PASS);


//
app.get('/', (req, res) => {

    res.send('Sports items server is running')
})

app.listen(port, () => {
    console.log(`Sports items is running on port : ${port}`)
});

// required for Vercel
module.exports = app;