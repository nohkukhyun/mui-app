import BoardSearchBar from 'components/modules/board/BoardSearchBar'
import React from 'react'
import styled from 'styled-components'

const BoardTemplate = () => {
  return (
    <SBoardTemplate>
      <BoardSearchBar />
    </SBoardTemplate>
  )
}

export default BoardTemplate

const SBoardTemplate = styled.section`
  width: 100%;
  position: relative;
  margin-top: 30px;
`
