import { Layout } from '../../layout';
import { About, Home, NotFound } from '../../pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
