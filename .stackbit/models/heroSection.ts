import { type ModelExtension } from '@stackbit/types';
import { commonFields } from './sectionCommon';

export const heroSection: ModelExtension = {
    name: 'heroSection',
    fields: [...commonFields]
};
<section class="bg-pink-100 py-16 px-4">
  <!-- nội dung của hero -->
</section>
export default {
  type: 'object',
  name: 'heroSection',
  label: 'Trang chính', // đổi tại đây
  ...
}
