interface TagInputProps {
  tags: string[];
  newTag: string;
  handleNewTagChange: (value: string) => void;
  addTag: () => void;
  handleRemoveTag: (tag: string) => void;
}

const TagInput: React.FC<TagInputProps> = ({
  tags,
  newTag,
  handleNewTagChange,
  addTag,
  handleRemoveTag,
}) => (
  <div>
    <div>
      <input
        type='text'
        value={newTag}
        onChange={(e) => handleNewTagChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            addTag();
          }
        }}
        className='w-full border border-gray-400 p-2'
      />
    </div>

    <div>
      {tags.map((tag) => (
        <span key={tag}>
          {tag}
          <button type='button' onClick={() => handleRemoveTag(tag)}>
            X
          </button>
        </span>
      ))}
    </div>
  </div>
);

export default TagInput;
export type { TagInputProps };
