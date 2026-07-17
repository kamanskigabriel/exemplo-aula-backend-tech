import express from "express";

const app = express();

app.use(express.json())

app.use('/api/v1/atv1', atv1)

app.use('/api/v1/atv2', atv2)

app.use('/api/v1/atv3', atv3)

app.use('/api/v1/atv4', atv4)

app.use('/api/v1/atv5', atv5)

app.use('/api/v1/atv6', atv6)

app.use('/api/v1/atv7', atv7)

app.use('/api/v1/atv8', atv8)

app.use('/api/v1/atv9', atv9)

app.use('/api/v1/atv10', atv10)
    app.listen(3000, () => {
    console.log("serve in port 3000")
})
