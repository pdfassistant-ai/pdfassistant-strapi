import { Button } from '@strapi/design-system';
import { Duplicate } from '@strapi/icons';
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const DuplicateEntryButton = () => {
  const { collectionType, id: documentId, slug } = useParams();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  // Strapi's clone route is available only for saved collection-type entries.
  // Single types and new entries therefore intentionally have no button.
  if (collectionType !== 'collection-types' || !documentId || !slug) {
    return null;
  }

  const entryPath = `/${collectionType}/${slug}/${documentId}`;
  const clonePath = pathname.replace(entryPath, `/${collectionType}/${slug}/clone/${documentId}`);

  return (
    <Button
      variant="secondary"
      startIcon={<Duplicate />}
      style={{ width: '100%' }}
      onClick={() => navigate(`${clonePath}${search}`)}
    >
      Duplicate
    </Button>
  );
};

export default DuplicateEntryButton;
