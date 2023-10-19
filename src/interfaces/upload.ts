export type UploadParam = {
  filename: string;
  file_size: number;
  id: number | string;
};
export type UploadSlot = {
  id: number;
  uploaded_filename: string;
  upload_url: string;
};
export type DiscordImage = {
  id: number | string;
  filename: string;
  uploaded_filename: string;
};
