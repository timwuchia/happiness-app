import React, { useState } from 'react'
import axios from 'axios'

const Survery = () => {

  const [word, setWord] = useState();
  const [feeling, setFeeling] = useState();
  const [personality, setPersonality] = useState();
  const [videos, setVideos] = useState([]);

  const submit = async (e) => {
    e.preventDefault();
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const data = JSON.stringify({ word, feeling, personality })
    try {
        const res = await axios.post(`/api/generate-response`, data, config)
        setVideos(res.data.youtube.items)
    } catch (error) {
        console.log(error)
    }
  }

  const onSelectWord = (e) => {
    setWord(e.target.value)
  }

  const onSelectFeeling = (e) => {
    setFeeling(e.target.value)
  }

  const onSelectPersonality = (e) => {
    setPersonality(e.target.value)
  }

  return (
    <div className="page-container container">
        <form onSubmit={submit}>
            <h1 className="text-center">Survey</h1>
            <div className="form-group mb-4">
                <label className="mb-2" htmlFor="word">Choose a word</label>
                <select value={word} onChange={onSelectWord} className="form-control" id="word" required>
                    <option value='' disabled>Select a word</option>
                    <option value="Happiness">Happiness</option>
                    <option value="Love">Love</option>
                    <option value="Laugh">Laugh</option>
                    <option value="Joy">Joy</option>
                    <option value="Celebration">Celebration</option>
                    <option value="Smile">Smile</option>
                    <option value="Cuddles">Cuddles</option>
                    <option value="Sweet">Sweet</option>
                    <option value="Sunshine">Sunshine</option>
                    <option value="Sunrise">Sunrise</option>
                    <option value="Beach">Beach</option>
                </select>
            </div>
            <div className="form-group mb-4">
                <label className="mb-2" htmlFor="personality-type">Choose your Personality Type (find out <a rel="noreferrer" target="_blank" href="https://www.16personalities.com/personality-types">here</a> to see which type you are) </label>
                <select value={personality} onChange={onSelectPersonality} className="form-control" id="personality-type" required>
                    <option value='' disabled>Select personality type</option>
                    <option value="Architect">Architect</option>
                    <option value="Logician">Logician</option>
                    <option value="Commander">Commander</option>
                    <option value="Debator">Debator</option>
                    <option value="Advocate">Advocate</option>
                    <option value="Protagonist">Protagonist</option>
                    <option value="Campaigner">Campaigner</option>
                    <option value="Advocate">Advocate</option>
                    <option value="Logistician">Logistician</option>
                    <option value="Defender">Defender</option>
                    <option value="Executive">Executive</option>
                    <option value="Consul">Consul</option>
                    <option value="Virtuoso">Virtuoso</option>
                    <option value="Adventurer">Adventurer</option>
                    <option value="Entrepreneur">Entrepreneur</option>
                    <option value="Entertainer">Entertainer</option>
                </select>
            </div>
            <div className="form-group mb-3">
                <label className="mb-2" htmlFor="personality-type">Why are you feeling low or sad?</label>
                <select value={feeling} onChange={onSelectFeeling} className="form-control" id="feeling" required>
                    <option value='' disabled>Select why you are feeling low or sad</option>
                    <option value="work">Work place stress</option>
                    <option value="relationship">Relationship stress</option>
                    <option value="comparison">Social comparison anxiety</option>
                    <option value="finance">Financial stress</option>
                    <option value="none">Not low just want to check out this app</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div>
            <h2>Videos</h2>
            {videos?.length > 0 &&
                videos.map((item, key) => (
                    <iframe
                        key={key}
                        width="853"
                        height="480"
                        src={`https://www.youtube.com/embed/${item.id.videoId}`}
                        allow="accelerometer; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Survery