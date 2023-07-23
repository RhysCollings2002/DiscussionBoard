import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Reply = (data) => {
  return (
        <text>{data.data.body}</text>
  );
};

export default Reply;

