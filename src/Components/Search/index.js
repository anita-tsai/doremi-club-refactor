import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import LabelBar from '../LabelBar';
import SearchBar from '../SearchBar';
import TagsBar from '../TagsBar';
import Chip from '@material-ui/core/Chip';



const Title = styled.p`
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
`


const TagWrapper = styled.div`
`




const Search = ({content, setContent, category, setCategory, tags, setTags}) => {
  const [tag1, setTag1] = useState(undefined)
  const [tag2, setTag2] = useState(undefined)

  const onTagUpdate1 = (option1) => {
    setTag1(option1)
  }

  const onTagUpdate2 = (option2) => {
    setTag2(option2)
  }

  const onTagChange = () => {
    console.log(tag1, tag2)
    const tag = [tag1, tag2].reduce((cal, val) => {
      if(val) {
        return [...cal, val.label]
      }
      return cal 
    },[]).join(' ')
    setTags([...tags, tag])
  }
  
  return (
    <div>
      <Title>
        在線房間：0
      </Title>
      <SearchBar content={content} setContent={setContent} />
      <LabelBar category={category} setCategory={setCategory} />
      <TagsBar onChange1={onTagUpdate1} onChange2={onTagUpdate2} />
      <Button
        variant="contained"
        onClick={onTagChange}
      >
        產生標籤
      </Button>
      <TagWrapper>
        {
          tags.map((tag) => {
            return(
              <div>
                <Chip 
                  label={tag}
                  variant="outlined"
                  clickable
                  onDelete={() => {
                    const newTags = tags.filter((t) => t !== tag)
                    setTags(newTags)
                  }}
                />
              </div>
            )
          })
        }
      </TagWrapper>
      <br />
      <br />
      <br />
    </div>
  )
}

export default Search;