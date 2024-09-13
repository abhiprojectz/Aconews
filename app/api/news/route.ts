import { NextRequest, NextResponse } from 'next/server'


const API_KEY = process.env.API_KEY || "3babe46f6277f4817e1ef02b357f28ec";  // TODO To be used from env.


export async function GET(request: NextRequest) {

    const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=general&apikey=${API_KEY}`);
    const data = await response.json();

    return NextResponse.json({ success: true, articles: data.articles })
}
